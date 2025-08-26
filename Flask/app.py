from flask import Flask,render_template
# Flask app setup
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('first.html')
@app.route('/VECSE_Blog')
def blog():
    return render_template('second.html')
@app.route('/VECSE_Blog/Content1')
def content1():
    return render_template('page1.html')
@app.route('/VECSE_Blog/Content2')
def content2():
    return render_template('page2.html')
@app.route('/VECSE_Blog/Content3')
def content3():
    return render_template('page3.html')
@app.route('/VECSE_Blog/Content4')
def content4():
    return render_template('page4.html')
@app.route('/VECSE_Blog/Content5')
def content5():
    return render_template('page5.html')
if __name__ == '__main__':
    app.run(debug=True)
