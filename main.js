function draw(e)
{
    const count = document.getElementById('in').value;
    for (let i=0;i<count;i++)
    {

        const size= Math.random()*200+ 40;
        const x = Math.random()*600+10;
        const y = Math.random()*600+10;
        if (e==='triangle')
        {
            const y = Math.random()*700+10;
            const canvas = document.createElement('canvas');
            canvas.style.height = size/2 +'px';
            canvas.style.width = size +'px';
            canvas.style.left=x+'px';
            canvas.style.top=y+'px';
            canvas.classList.add(e);
            canvas.classList.add('absolute');
            canvas.style.border='none';
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(0,canvas.height);
            ctx.lineTo(canvas.width/2,0);
            ctx.lineTo(canvas.width,canvas.height);
            ctx.fill();

            document.getElementById('field').appendChild(canvas);
        }
        else {
            const div=document.createElement('div');
            div.classList.add(e);
            div.classList.add('absolute');
            div.style.height = size +'px';
            div.style.width = size +'px';
            div.style.left=x+'px';
            div.style.top=y+'px';
            document.getElementById('field').appendChild(div);
        }



    }
}

const element = document.getElementById('field');
element.addEventListener('click', function (e) {
    var target = e.target; // элемент по которому кликнули
    if (target.className === 'round absolute' || target.className === 'square absolute') target.style.backgroundColor = "yellow";
    else if (target.className === 'triangle absolute') {
        let ctx = target.getContext('2d');
        ctx.clearRect(0,0,target.width,target.height)
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.moveTo(0,target.height);
        ctx.lineTo(target.width/2,0);
        ctx.lineTo(target.width,target.height);
        ctx.fill();
    }
}, false);
element.addEventListener('dblclick', function (e) {
    var target = e.target; // элемент по которому кликнули
    if (target.className === 'round absolute' || target.className === 'square absolute' || target.className === 'triangle absolute') target.remove();
}, false);