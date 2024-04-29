export const checkHidden = (id: string) => {
    var element = document.getElementById(id);
    if (element){
        var isHidden = window.getComputedStyle(element).display === 'none';
        if (isHidden) {
            console.log("The element is hidden");
            return true;
        }
        else {
            console.log("The element is visible");
            return false;
        }
    }
    return false;
}