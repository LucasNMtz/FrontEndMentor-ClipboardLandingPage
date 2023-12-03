// Social logos
const socialLogosContainer = document.querySelectorAll(".social-logos-a");
const socialLogos = document.querySelectorAll(".social-logos");

socialLogosContainer.forEach(function (a, index) 
{
    a.addEventListener("mouseenter" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace(".svg", "-green.svg");
    })

    a.addEventListener("mouseleave" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace("-green.svg", ".svg");
    })
});
// Social logos