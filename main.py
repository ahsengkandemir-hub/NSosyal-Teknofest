from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def giris():
  return render_template('giris.html')

@app.route('/deneme')
def durum():
  return render template('app.html')

@app.route('data.json')
def data_json():
  with open('data/data.json', r, encode:'utf-8') as dosya:
    data = json.load(dosya)
  return jsonify(data)

if __name__ == __main__:
  app.run(debug=True)
