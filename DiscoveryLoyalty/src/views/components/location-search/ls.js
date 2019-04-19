
function clickOnOpenLsSearch(){
    var openSearch = document.querySelector('#body-search .search-btn');
    if(openSearch){
        openSearch.addEventListener('click', function(){
            openLsSearch();
        });    
    }
};
clickOnOpenLsSearch();

function openLsSearch() {
    document.getElementById("ls-dropdown").classList.toggle("show");
  }