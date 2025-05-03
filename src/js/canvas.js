document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#f4f4f4';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#e8491d';
        ctx.fill();
        
        ctx.fillStyle = '#35424a';
        ctx.fillRect(200, 50, 100, 100);
        
        ctx.font = '20px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText('HTML5 Canvas', 120, 180);
        
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(350, 150);
        ctx.strokeStyle = '#333';
        ctx.stroke();
    }
});