// require('../src/assets/scripts/jquery.hoverdir');

const Hover = {
    hoverDiv: () => {
        $('.the_work_section .content-details').each(function(){ 
            $(this).hoverdir(); 
        });
    },
};
export default Hover;
			
	