const Testiminials = {
    getAllTestimonials: () => {

        var objAllTestimonials = [
            {
                id: 1,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/sample-testimonial.jpg",
                name: "Jane Doe",
                position: "Home Owner",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            },
            {
                id: 2,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/sample-testimonial2.jpg",
                name: "John Doe",
                position: "Business Owner",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            },
            {
                id: 3,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/testimonial6.jpg",
                name: "Sarah Silver",
                position: "Company Owner",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            },
            {
                id: 4,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/testimonial5.jpg",
                name: "Jim Doe",
                position: "Home Owner",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            },
            {
                id: 5,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/sample-testimonial3.jpg",
                name: "Sarah Jane",
                position: "CEO",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            },
            {
                id: 6,
                image: "https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/sample-testimonial4.jpg",
                name: "Janet Doe",
                position: "Business Owner",
                content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            }
        ]

        var testimonials_items = document.querySelector(".column_item_testimonial");
        var html = "";
        objAllTestimonials.forEach(testimonial => {
            // html += '.col-sm-6.col-md-6.col-lg-6'
            // html +=    '.wrap_testimonials_item'
            // html +=         '.testimonials_item'
            // html +=             '.wrap_img_user'
            // html +=                '.img_user'
            // html +=                    'img(src="https://f71lt0q191r215mt-zippykid.netdna-ssl.com/wp-content/uploads/2014/09/sample-testimonial.jpg", alt="Image User")'
            // html +=             '.wrap_description'
            // html +=                 '.user_name.center Jane Doe'
            // html +=                 '.user_position.center Home Owner'
            // html +=                 '.conetent_testimonial' 
            // html +=                    ' p Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.' 


            html +='<div class="col-sm-6 col-md-6 col-lg-6">'
            html +=    '<div class="wrap_testimonials_item">'
            html +=        '<div class="testimonials_item">'
            html +=            '<div class="wrap_img_user">'
            html +=                '<div class="img_user"><img src="' + testimonial.image + '" alt="Image User" /></div>'
            html +=            '</div>'
            html +=            '<div class="wrap_description">'
            html +=                '<div class="user_name center">' + testimonial.name + '</div>'
            html +=               '<div class="user_position center">' + testimonial.position + '</div>'
            html +=                '<div class="conetent_testimonial">'
            html +=                    '<p>' + testimonial.content + '</p>'
            html +=                '</div>'
            html +=            '</div>'
            html +=        '</div>'
            html +=    '</div>'
            html +='</div>'
        });
        testimonials_items.innerHTML = html;
    },
    setTestimonialPageActive: () => {
        if($('.bgr_content_testimonial')) {
            $('.bgr_header ul li').removeClass('active_menu_destop_lv1');
            $('.bgr_header ul li.menu_right_lv1__testimonial').addClass('active_menu_destop_lv1');

        }
    }
}
export default Testiminials;