const Home = {
    slider: () => {
        $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            // autoplay:true,
          });
    }
    
}
export default Home;