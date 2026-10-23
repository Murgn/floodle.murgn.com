const startDate = new Date(2026, 9, 24);
const today = new Date();
const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

document.getElementById("day").textContent = "#" + (days + 1);

window.share = async (text) => 
{
    if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) 
        await navigator.share({title: "floodle", text: text});
    else 
        await navigator.clipboard.writeText(text);
};