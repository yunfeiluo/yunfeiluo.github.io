class preprocess:
    '''
    tokenize, stopwords removel, stemming
    '''
    def __init__(self, text):
        '''
        @input text: map: doc -> text
        '''
        self.text = dict() #map doc_ind -> text
        self.doc_ind = dict() #map: doc_ind -> [doc_path, length]
        self.inv_ind = dict()

        ind = 0
        for t in text:
            self.doc_ind[ind] = [t, 0]
            self.text[ind] = text[t]
            ind += 1

        self.stopwords = dict() # map: words -> bool
        with open ("search_engine_lib/stopwords.txt", 'r') as f:
            line = f.readline()
            while line:
                self.stopwords[line] = True
                line = f.readline()

    # helper function, remove the dot '.' in the string, return string
    def removeD(self, word):
        res = list()
        lw = len(word)
        phrase = ''
        curr = ''
        sl = 0
        for i in range(lw):
            if word[i] != '.':
                curr += word[i]
                sl += 1
            else:
                if sl == 1:
                    sl = 0
                    phrase += curr
                    curr = ''
                    continue
                else:
                    res.extend([phrase, curr] if len(phrase) >= 1 else [curr])
                    curr = ''
                    phrase = ''
        if len(phrase) >= 1:
            res.append(phrase)
        if len(curr) >= 1:
            res.append(curr)
        return res

    def tokenize(self, lines):
        words = list()
        # split by space
        for line in lines:
            word = ''
            for c in line:
                if c.isalpha():
                    word += c.lower()
                elif c.isdigit() or c == '.':
                    word += c
                else:
                    if len(word) >= 1:
                        words.extend(self.removeD(word))
                    word = ''
            if len(word) >= 1:
                words.extend(self.removeD(word))
        return words

    # def stemming(self):
    #     from nltk.stem.snowball import SnowballStemmer
    #     stemmer = SnowballStemmer("english")
    #     for i in self.text:
    #         words = self.text[i]
    #         for i in range(len(words)):
    #             words[i] = stemmer.stem(words[i])
    #     return self
    
    def stopword_removel(self):
        for i in self.text:
            words = list()
            for word in self.text[i]:
                if self.stopwords.get(word) == None:
                    words.append(word)
            self.text[i] = words
    
    def generate_inverted_index(self):
        '''
        @return inv_ind: map: term -> map: doc_ind -> list of positions
        '''
        for doc in self.text:
            text = self.text[doc]
            for j in range(len(text)):
                term = text[j]
                
                if self.inv_ind.get(term) == None:
                    self.inv_ind[term] = dict()
                
                if self.inv_ind[term].get(doc) == None:
                    self.inv_ind[term][doc] = [j]
                else:
                    self.inv_ind[term][doc].append(j)
    
    def preprocessing(self):
        for i in self.text:
            words = self.tokenize(self.text[i])
            self.text[i] = words
            # self.stemming()
            self.stopword_removel()
        for d in self.doc_ind:
            self.doc_ind[d][1] = len(self.text[d])

    # launch the pre-processing
    def run(self):
        print("Preprocessing...")
        self.preprocessing()

        print("Generating inverted index...")
        self.generate_inverted_index()