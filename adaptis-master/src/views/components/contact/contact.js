

const Validate = {
    validateForm: () => {
        $('#demo').validate({
            rules: {
                firstname:{
                    required: true,
                    minlength: 3,
                    maxlength:20
                },
                lastname:{
                    required: true,
                    minlength: 3,
                    maxlength:20
                },
                email:{
                    required: true,
                    email:true
                }
                
            },
            messages:{
                firstname:{
                    required: 'We need to know who you are',
                    minlength: 'at least 3 character',
                    maxlength: 'most 20 character'
                },
                lastname:{
                    required: 'A formality, Just in case'
                },
                email:{
                    required: 'This is how we will contact you'
                }
            }
        });
    },
};
export default Validate;


