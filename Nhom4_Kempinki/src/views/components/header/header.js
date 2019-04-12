import Choices from 'choices.js'
const Header = {
  selectLanguage: () => {
    document.querySelector('.top-panel .dropdown-toggle').addEventListener('click', function(){
      this.nextElementSibling.classList.toggle('show-up');
    })
    var element = document.getElementById('a')
    const choices = new Choices(element)
    choices.setChoices([{
      label: 'Group one',
      id: 1,
      disabled: false,
      choices: [
        {value: 'Child One', label: 'Child One', selected: true},
        {value: 'Child Two', label: 'Child Two'},
        {value: 'Child Three', label: 'Child Three'},
      ]
    },
    {
      label: 'Group two',
      id: 2,
      disabled: false,
      choices: [
        {value: 'Child Four', label: 'Child Four'},
        {value: 'Child Five', label: 'Child Five'},
        {value: 'Child Six', label: 'Child Six'},
      ]
    }], 'value', 'label', false);
  },
  
};
export default Header;
