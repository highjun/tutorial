const container = document.querySelector('.container');

function createQuestion(data){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="card-header">
        <div class="question">Question</div>
        <button class="open"><i class="far fa-plus-square"></i></button>
    </div>
    <div class="card-body">
        <hr/>
        <p class="answer">
            Answer
        </p>
    </div>
    `;
    card.querySelector('.answer').textContent = data['answer'];
    card.querySelector('.question').textContent = data['question'];
    card.querySelector('.open').addEventListener('click', function(){
        const card_body = card.querySelector('.card-body');
        const button = card.querySelector('i');
        card_body.classList.toggle('opened');
        button.classList.toggle('fa-plus-square');
        button.classList.toggle('fa-minus-square');
    })
    container.appendChild(card);
}

for(var idx in questions){
    createQuestion(questions[idx]);
}
