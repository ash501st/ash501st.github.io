const liara = {
    name: "Liara T'Soni",
    class: "Biotic Researcher",
    level: parseInt(localStorage.getItem('liara_level')) || 1,
    health: parseInt(localStorage.getItem('liara_health')) || 100,

    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert("Liara has fallen in battle!");
        }
        localStorage.setItem('liara_health', this.health);
        location.reload();
    },

    levelUp() {
        this.level += 1;
        localStorage.setItem('liara_level', this.level);
        location.reload();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('char-level').innerText = liara.level;
    document.getElementById('char-health').innerText = liara.health;

    document.getElementById('btn-attack').addEventListener('click', () => liara.attacked());
    document.getElementById('btn-level').addEventListener('click', () => liara.levelUp());
});