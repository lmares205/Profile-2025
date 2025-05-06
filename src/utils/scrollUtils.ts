export const scrollToElement = (destination: string) => {
    let destinationEl = document.getElementById(destination);

    if (destinationEl) {
        let destinationY = destinationEl.offsetTop - 140;
        window.scrollTo({
            top: destinationY,
            left: 0,
            behavior: 'smooth'
        })
    }
};
