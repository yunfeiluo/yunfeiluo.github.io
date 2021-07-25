import os
import json
import search_engine_lib.preprocess_and_indexing as pre_ind

def dfs(root, text):
    if os.path.isfile(root):
        real_ind = root[16:-4] + '.pdf'
        text[real_ind] = list()
        with open(root, 'r', encoding='utf-8') as f:
            line = f.readline()
            text[real_ind].append(line)
            while line:
                line = f.readline()
                text[real_ind].append(line)
    else:
        for subdir in os.listdir(root):
            dfs("{}/{}".format(root, subdir), text)

if __name__ == '__main__':
    # fetch the texts of all the document
    print("Fetching files...")
    root = "../articles_txt"
    text = dict() # map: doc_path -> lines of text
    dfs(root, text)

    # preprocessing
    process_obj = pre_ind.preprocess(text)
    process_obj.run() # inverted index

    # store the inverted index
    with open('search_engine_lib/stored/indexing_.json', 'w') as f:
        json.dump(process_obj.inv_ind, f)
    
    # store the document index
    with open('search_engine_lib/stored/doc_ind.json', 'w') as f:
        json.dump(process_obj.doc_ind, f)