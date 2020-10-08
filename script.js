// Activities Item Filter 
const filterContainer=document.querySelector(".activities-filter"),
filtertBtns=filterContainer.children,
totalFilterBtn=filtertBtns.length,
activitiesItem=document.querySelectorAll(".activities-item"),
totalActivitiesItem=activitiesItem.length;


for(let i=0; i<totalFilterBtn; i++){
    filtertBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
        for(let k=0; k<totalActivitiesItem; k++){
            if(filterValue === activitiesItem[k].getAttribute("data-category")){
                activitiesItem[k].classList.remove("hide");
                activitiesItem[k].classList.add("show");
            }
            else{
                activitiesItem[k].classList.remove("show");
                activitiesItem[k].classList.add("hide");
            }
            if(filterValue === "all"){
                activitiesItem[k].classList.remove("hide");
                activitiesItem[k].classList.add("show");
            }
        }
    })
}

// Activities Lightbox
    const lightbox=document.querySelector(".lightbox"),
           lightboxImg=lightbox.querySelector(".lightbox-img"),
           lightboxClose=lightbox.querySelector(".lightbox-close"),
           lightboxText=lightbox.querySelector(".caption-text"),
           lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalActivitiesItem; i++){
        activitiesItem[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    // Show next image
    function nextItem(){
        if(itemIndex === totalActivitiesItem-1){
            itemIndex=0;
        }
        else{
            itemIndex++;
        }
        changeItem();
    }

    // Show previous image
    function prevItem(){
        if(itemIndex === 0){
            itemIndex = totalActivitiesItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    // Changing of image 
    function changeItem(){
        imgSrc=activitiesItem[itemIndex].querySelector(".activities-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML = activitiesItem[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalActivitiesItem;
    }

// Close Lightbox
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})

