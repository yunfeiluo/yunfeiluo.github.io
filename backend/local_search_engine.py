from flask import Flask
from flask_cors import CORS

import search_engine_lib.query_time as qt
 
app = Flask(__name__)
CORS(app)

@app.route('/<queries>')
def fetch_docs(queries):
    # queries = event["query"] # aws lambda
    
    docs_list = qt.run(queries)
    
    # return response
    return {
        "docs_list": docs_list
    }
 
if __name__ == '__main__':
    app.run()