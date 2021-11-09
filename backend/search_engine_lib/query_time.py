import json

import search_engine_lib.preprocess_and_indexing as pre_ind
from search_engine_lib.retrieval_model import BM25

def query(queries, inv_ind, doc_ind):
    # preprocessing queries
    process_obj = pre_ind.preprocess({0: [queries]})
    process_obj.preprocessing()
    queries = process_obj.text[0]

    # # for test check
    # print("queries", queries)
    # exit()

    model = BM25(k1=1.2, b=0.75, inv_ind=inv_ind, doc_ind=doc_ind)

    retrieved_list = model.queries(queries)
    return retrieved_list

'''
function run, take queries as input, output the retrieved_list
'''

def run(queries):
    # fetch the stored docs and indexing
    indexing_path = 'search_engine_lib/stored/indexing_.json'
    doc_index_path = 'search_engine_lib/stored/doc_ind.json'

    inv_ind = None
    with open(indexing_path, 'r') as f:
        inv_ind = json.load(f)
    
    doc_ind = None
    with open(doc_index_path, 'r') as f:
        doc_ind = json.load(f)
    
    # perform retrieving tasks
    docs_list = list()    
    retrieved_list = query(queries, inv_ind, doc_ind)
    
    # mapping the doc index to doc path
    for i in retrieved_list:
        docs_list.append(doc_ind[i][0])
    
    # # for test check
    # for d in docs_list:
    #     print(d)
    
    return docs_list

if __name__ == "__main__":
    run("natural language process")