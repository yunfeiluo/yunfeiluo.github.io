import os
import json
import search_engine_lib.preprocess_and_indexing as pre_ind

def dfs(root, text):
    if os.path.isfile(root):
        real_ind = root[19:]
        if len(real_ind.split('.')[0]) > 0:
            txt_path = "../update/articles_txt/{}.txt".format(real_ind.split('.')[0])
            text[real_ind] = list()
            
            with open(txt_path, 'r', encoding='utf-8') as f:
                line = f.readline()
                text[real_ind].append(line)
                while line:
                    line = f.readline()
                    text[real_ind].append(line)
    else:
        for subdir in os.listdir(root):
            dfs("{}/{}".format(root, subdir), text)

def fetch_pub_txt(text):
    for f_ in os.listdir("../update/publications_txt"):
        real_ind = "[publication] {}".format(f_)
        text[real_ind] = list()
        txt_path = os.path.join("../update/publications_txt", f_)

        with open(txt_path, 'r', encoding='utf-8') as f:
            line = f.readline()
            text[real_ind].append(line)
            while line:
                line = f.readline()
                text[real_ind].append(line)

if __name__ == '__main__':
    # fetch the texts of all the document
    print("Fetching files...")
    root = "../update/articles"
    text = dict() # map: doc_path -> lines of text
    dfs(root, text)
    fetch_pub_txt(text)

    # preprocessing
    process_obj = pre_ind.preprocess(text)
    process_obj.run() # inverted index

    # store the inverted index
    with open('search_engine_lib/stored/indexing_.json', 'w') as f:
        json.dump(process_obj.inv_ind, f)
    
    # store the document index
    with open('search_engine_lib/stored/doc_ind.json', 'w') as f:
        json.dump(process_obj.doc_ind, f)
    
    print("Index Fresh Complete.")

    for i in process_obj.doc_ind:
        print(i, process_obj.doc_ind[i])