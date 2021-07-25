import math

class BM25:
    def __init__(self, k1, b, inv_ind, doc_ind):
        '''
        @param k1, b: parameters for BM25 algorithm
        @param inv_ind: the inverted list, in the form map: [term -> map: (docId -> positions)]
        @param doc_ind: the collected document, in the form map: doc_id -> [doc_path, doc_length]
        '''
        self.k1 = k1
        self.b = b
        self.inv_ind = inv_ind
        self.doc_ind = doc_ind
        self.N = len(doc_ind) # number of documents
        self.avdl = 0
        self.scenes = dict() # map: doc_id -> score
        for i in doc_ind:
            self.avdl += doc_ind[i][1]
        self.avdl /= self.N
    
    # queries alg, return map: docId -> score
    def queries(self, queries):
        # query stats
        qf = dict()
        for term in queries:
            if qf.get(term) == None:
                qf[term] = 1
            else:
                qf[term] += 1

        # iterate over query terms
        for q in qf:
            coef = math.log((self.N - len(self.inv_ind[q]) + 0.5) / (len(self.inv_ind[q]) + 0.5))

            # iterate over posting list
            for doc in self.inv_ind[q]:
                tf = len(self.inv_ind[q][doc]) # term frequency
                curr_score = coef * ((self.k1 + 1) * int(tf) / (self.k1 * (1 - self.b + self.b * (self.doc_ind[doc][1] / self.avdl)) + int(tf)))
                if self.scenes.get(doc) == None:
                    self.scenes[doc] = curr_score
                else:
                    self.scenes[doc] += curr_score

        # sort the retrieved list 
        retrieved_list = sorted(self.scenes.items(), key=lambda x:x[1], reverse=True)
        return [i[0] for i in retrieved_list]
        