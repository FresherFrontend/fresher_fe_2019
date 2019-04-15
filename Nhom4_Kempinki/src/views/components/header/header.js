require('select2');
require('moment');
import Pikaday from 'pikaday';
const Header = {
  selectLanguage: () => {
    document.querySelector('.top-panel .dropdown-toggle').addEventListener('click', function(){
      this.nextElementSibling.classList.toggle('show-up');
    })
  },
  selectHotel: () => {
    var data = [
      {
        "id": "Where would you like to go?",
        "text": "Where would you like to go?"
      },
      { 
        "text": "Austrla", 
        "children" : [
          {
              "id": "Austria - Vienna - Palais Hansen Kempinski Vienna",
              "text": "Austria - Vienna - Palais Hansen Kempinski Vienna"
          },
          {
              "id": "Austria - Jochberg - Kitzbühel - Kempinski Hotel Das Tirol Jochberg",
              "text": "Austria - Jochberg - Kitzbühel - Kempinski Hotel Das Tirol Jochberg"
          }
        ]
      },
      { 
        "text": "Bulgarla", 
        "children" : [
          {
              "id": "Bulgaria - Bansko - Kempinski Hotel Grand Arena Bansko",
              "text": "Bulgaria - Bansko - Kempinski Hotel Grand Arena Bansko"
          }
        ]
      },
      { 
        "text": "China", 
        "children" : [
          {
              "id": "Beijing - Kempinski Hotel Beijing Lufthansa Center",
              "text": "Beijing - Kempinski Hotel Beijing Lufthansa Center"
          },
          {
            "id": 'Beijing - Sunrise Kempinski Hotel Beijing',
            "text": "Beijing - Sunrise Kempinski Hotel Beijing"
          },
          {
            "id": "Beijing Yanqi Lake - Yanqi Lake Boutique Hotels",
            "text": "Beijing Yanqi Lake - Yanqi Lake Boutique Hotels"
          },
        ]
      }
    ];
    $('.form-search-hotel').select2({
      data: data,
      dropdownParent: $('.form-group.form-search-location')
    });
  },
  selectRoom: () => {
    var data = [
      {
        "id": "1 Room",
        "text": "1 Room"
      },
      {
          "id": "2 Room",
          "text": "2 Rooms"
      },
      {
        "id": "3 Room",
        "text": "3 Rooms"
      },
      {
        "id": "4 Room",
        "text": "4 Rooms"
      }
    ]
    $('.numberOfRoom').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownParent: $('.form-group.guest-select')
    });
  },
  selectAdult: () => {
    var data = [
      {
        "id": "1 Adult",
        "text": "1 Adult Per Room"
      },
      {
          "id": "2 Adult",
          "text": "2 Adults Per Room"
      },
      {
        "id": "3 Adult",
        "text": "3 Adults Per Room"
      },
      {
        "id": "4 Adult",
        "text": "4 Adults Per Rooms"
      },
    ]
    $('.numberOfAdult').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownParent: $('.num-adult')
    });
  },
  selectChildren: () => {
    var data = [
      {
        "id": "",
        "text": "0 Childrens Per Room"
      },
      {
        "id": "1 Children",
        "text": "1 Childrens Per Room"
      },
      {
          "id": "2 Children",
          "text": "2 Childrens Per Room"
      },
      {
        "id": "3 Children",
        "text": "3 Childrens Per Room"
      },
      {
        "id": "4 Adult",
        "text": "4 Childrens Per Rooms"
      },
    ]
    $('.numberOfChild').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownParent: $('.num-child')
    });
  },
  selectAge: () => {
    var data = [
      {
        "id": "0",
        "text": "0"
      },
      {
        "id": "1",
        "text": "1"
      },
      {
        "id": "2",
        "text": "2"
      },
      {
        "id": "3",
        "text": "3"
      },
      {
        "id": "4",
        "text": "4"
      },
      {
        "id": "5",
        "text": "5"
      },
      {
        "id": "6",
        "text": "6"
      },
      {
        "id": "7",
        "text": "7"
      },
      {
        "id": "8",
        "text": "8"
      },
      {
        "id": "9",
        "text": "9"
      },
      {
        "id": "10",
        "text": "10"
      },
      {
        "id": "11",
        "text": "11"
      },
      {
        "id": "12",
        "text": "12"
      },
    ]
    $('.ageChildren').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownParent: $('.form-group.children-select')
    });
  },
  selectTypeCode: () => {
    var data = [
      {
        "id": "",
        "text": "Type Of Code"
      },
      {
          "id": "Corporate ID",
          "text": "Corporate ID"
      },
      {
        "id": "IATA",
        "text": "IATA"
      },
      {
        "id": "Group Code",
        "text": "Group Code"
      },
    ]
    $('#CodeType').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownParent: $('.type-code-block')
    });
  },
  selectDate: () => {
    var field = document.getElementById('check-in');
    var picker = new Pikaday({
      field: field,
      numberOfMonths: 2,
      reposition: false,
      minDate: new Date(),
      format: 'll',
      onOpen: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '35px';
      },
      onClose: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '35px';
      },
      onSelect: function() {
        var checkIn = this.getMoment().format('ll');
        document.getElementById('check-out').value = checkIn;
    }
    });
    var a = field.parentNode;
    a.parentNode.insertBefore(picker.el, a.nextSibling);
    var picker2 = new Pikaday({
      field: document.getElementById('check-out'),
      numberOfMonths: 2,
      reposition: false,
      minDate: new Date(),
      format: 'll',
      onOpen: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '35px';
      },
      onClose: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '35px';
      },
      onSelect: function() {
        console.log(this.getMoment().format('ll'));
    }
    });
    var b = document.getElementById('check-out').parentNode;
    b.parentNode.insertBefore(picker2.el, b.nextSibling);
  },
  scrollTopHeader: () => {
    const offsetTop = document.querySelector('.booking-block').offsetTop - 20;
    window.addEventListener("scroll", function(){
        if(window.scrollY >= offsetTop){
          document.querySelector('.booking-block').classList.add('fixed');
          document.querySelector('.menu-left').classList.add('fixed');
          document.querySelector('.sticky-bar-mobile').classList.add('show-up');
        }
        else{
          document.querySelector('.booking-block').classList.remove('fixed');
          document.querySelector('.menu-left').classList.remove('fixed');
          document.querySelector('.sticky-bar-mobile').classList.remove('show-up');
        }
    })
    var scrollTo = document.querySelectorAll('.content.overlay .text')
    scrollTo.forEach(function (elem) {
      elem.addEventListener('click', function(){
        var id = this.dataset.target;
        var y = document.getElementById(id).offsetTop;
        $("html, body").animate({ scrollTop: y }, 500);
      })
    });
  },
};
export default Header;
