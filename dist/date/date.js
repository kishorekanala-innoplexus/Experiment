// Defining Years , Months, Days
function Months(){
	var month =[
					{'id':0,'month':'January'},
					{'id':1,'month':'February'},
					{'id':2,'month':'March'},
					{'id':3,'month':'April'},
					{'id':4,'month':'May'},
					{'id':5,'month':'June'},
					{'id':6,'month':'July'},
					{'id':7,'month':'August'},
					{'id':8,'month':'September'},
					{'id':9,'month':'October'},
					{'id':10,'month':'November'},
					{'id':11,'month':'December'}
				]
	return month;
}
function Year(){
	var year= Array(300);
	for (var i = 0; i < year.length; i++) {
		year[i]= 1850+i;
	}
	return year;
}
function Separator(){
	var separator=[
					{'id':'/','name':'Slash'},
					{'id':'.','name':'Dot'},
					{'id':'-','name':'Hypen'},
					{'id':' ','name':'Space'}
				  ]
	return separator;
}
function Format(){
	var format=[
					{'id':1 ,'name':'ddmmyyyy'},
					{'id':2 ,'name':'mmddyyyy'},
					{'id':3 ,'name':'yyyymmdd'}
			   ]
	return format;
}




function getShortDayNames(){
	var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return dayNames;
}



function currentMonth(){
	var x = new Date();
	return x.getMonth();

}
function currentYear(){
	var x = new Date();
	return x.getFullYear();
}
function getCalendar(year,month){
	var x = new Date(year,month+1,0);
	var y = new Date(year,month,1);
	var NoOfDays= x.getDate();
	var StartDay= y.getDay();
	//console.log(year,month,NoOfDays,StartDay);
	var row0 = Array(7);
	var row1 = Array(7);
	var row2 = Array(7);
	var row3 = Array(7);
	var row4 = Array(7);
	var row5 = Array(7);
	var k=1;
	var z=0;
		for (var i = 0; i < 6; i++) {
			if(i==0)
			{
				for (var m = 0; m <= StartDay ; m++) {
					row0[m]="--";
				}
				for (var m = StartDay; m <=6; m++) {
					row0[m]=k;
					++k;
				}
			}
			if(i==1)
			{
				for (var m = 0; m <= 6; m++) {
					row1[m]=k;
					++k;
				}
			}
			if(i==2)
			{
				for (var m = 0; m <= 6; m++) {
					row2[m]=k;
					++k;
				}
			}
			if(i==3)
			{
				for (var m = 0; m <= 6; m++) {
					row3[m]=k;
					++k;
				}
			}
			if(i==4)
			{
				for (var m = 0; m <= 6; m++) {
					if(k<=NoOfDays){
					row4[m]=k;
						++k;
					}
					else{
						row4[m]="--";
					}
				}
			}
			if(i==5)
			{  
				for (var m = 0; m <= 6; m++) {
					if(k<=NoOfDays){
					row5[m]=k;
						++k;
					}
					else{
						row5[m]="--";
					}
				}
			}
		}
	var Calendar={"row0":row0,"row1":row1,"row2":row2,"row3":row3,"row4":row4,"row5":row5};
	//console.log(Calendar);
	return Calendar;
}



datePickerCtrl['$inject'] = ['$scope'];
var date=angular.module('date', [])
date.component('datePicker',{
	templateUrl:"dist/date/date.html",
	controller:datePickerCtrl
})




function datePickerCtrl($scope){
	this.year = Year();
	this.month = Months();
	this.currentYear = currentYear(); 
	this.currentMonth = currentMonth();
	this.days = getShortDayNames();
	this.separator= Separator();
	this.format=Format();
	this.$onInit= function(){
		this.currentYear = currentYear(); 
		this.currentMonth = currentMonth();
		this.monthModel= this.currentMonth;
		this.monthSelected= this.currentMonth;
		this.yearSelected= this.currentYear;
		this.yearModel= this.currentYear;
		this.calendar=getCalendar(this.currentYear,this.currentMonth);
		this.separatorModel="/";
		this.formatModel=1;
	}



	this.Selection= function(){
		this.yearSelected = this.yearModel;
		this.monthSelected = this.monthModel;
		this.calendar=getCalendar(this.yearSelected,this.monthSelected);
	}
	this.check=function(row,index){
		if(this.checked){
			if(row=="--"||index==0 || index==6){
				return true;
			}else{
				return false;
			}
		}else{
			if(row=="--"){
				return true;
			}else{
				return false;
			}
		}

	}
	
	this.dateSelection= function(date,index){
		this.date=date;
		this.SelectionFormatSeparator();
		this.clicked=index;
		this.selectedMonth= this.monthModel;
		this.selectedYear=this.yearModel;
	}
	this.SelectionFormatSeparator= function(){
		if(this.date!== undefined){
			if(this.formatModel==1){
					this.output=this.date + this.separatorModel + (this.monthModel+1) +this.separatorModel+this.yearModel;
			}
			if(this.formatModel==2){
				this.output=(this.monthModel+1)+ this.separatorModel+this.date +this.separatorModel+this.yearModel;
			}
			if (this.formatModel==3) {
				this.output=this.yearModel+this.separatorModel+(this.monthModel+1)+ this.separatorModel+this.date ;
			}
		}
	}
	
}








datePickerRangeEndCtrl['$inject'] = ['$scope'];
date.component('datePickerRangeEnd',{
	templateUrl:"dist/date/daterangeend.html",
	controller:datePickerRangeEndCtrl
})




function datePickerRangeEndCtrl($scope){
	this.year = Year();
	this.month = Months();
	this.currentYear = currentYear(); 
	this.currentMonth = currentMonth();
	this.days = getShortDayNames();
	this.separator= Separator();
	this.format=Format();
	this.$onInit= function(){
		this.currentYear = currentYear(); 
		this.currentMonth = currentMonth();
		this.monthModel= this.currentMonth;
		this.monthSelected= this.currentMonth;
		this.yearSelected= this.currentYear;
		this.yearModel= this.currentYear;
		this.calendar=getCalendar(this.currentYear,this.currentMonth);
		this.separatorModel="/";
		this.formatModel=1;
	}



	this.Selection= function(){
		this.yearSelected = this.yearModel;
		this.monthSelected = this.monthModel;
		this.calendar=getCalendar(this.yearSelected,this.monthSelected);
	}
	this.check=function(row,index){
		if(this.checked){
			if(row=="--"||index==0 || index==6){
				return true;
			}else{
				return false;
			}
		}else{
			if(row=="--"){
				return true;
			}else{
				return false;
			}
		}

	}
	this.range1=function(date,month,year){
		
		this.gotDate=date;
		this.gotMonth=month;
		this.gotYear=year;
		
		this.range=function(date,month,year,index){
			if(this.gotDate==undefined||this.gotMonth==undefined||this.gotYear==undefined){
				return false;
			}else if(this.gotDate==' ' && this.gotMonth==' ' && this.gotYear==' '){
				this.output="";
				this.clear=false;
				return false;
			}else{
				if(this.gotYear<year){
					return true;
				}else if(this.gotYear==year){
					if(this.gotMonth<month){
						return true;
					}else if(this.gotMonth==month){
						if (this.gotDate<date) {
							return true;
						}
					}
				}
			}
			return false;
		}

	}
	this.dateSelection= function(date,index){
		this.date=date;
		this.SelectionFormatSeparator();
		this.clicked=index;
		this.clear= true;
		this.selectedMonth= this.monthModel;
		this.selectedYear=this.yearModel;
		this.range1(date,this.selectedMonth,this.selectedYear,2)
	}
	this.SelectionFormatSeparator= function(){
		if(this.date!== undefined){
			if(this.formatModel==1){
					this.output=this.date + this.separatorModel + (this.monthModel+1) +this.separatorModel+this.yearModel;
			}
			if(this.formatModel==2){
				this.output=(this.monthModel+1)+ this.separatorModel+this.date +this.separatorModel+this.yearModel;
			}
			if (this.formatModel==3) {
				this.output=this.yearModel+this.separatorModel+(this.monthModel+1)+ this.separatorModel+this.date ;
			}
		}
	}
	
}





datePickerRangeStartCtrl['$inject'] = ['$scope'];
date.component('datePickerRangeStart',{
	templateUrl:"dist/date/daterangestart.html",
	controller:datePickerRangeStartCtrl
})




function datePickerRangeStartCtrl($scope){
	this.year = Year();
	this.month = Months();
	this.currentYear = currentYear(); 
	this.currentMonth = currentMonth();
	this.days = getShortDayNames();
	this.separator= Separator();
	this.format=Format();
	this.$onInit= function(){
		this.currentYear = currentYear(); 
		this.currentMonth = currentMonth();
		this.monthModel= this.currentMonth;
		this.monthSelected= this.currentMonth;
		this.yearSelected= this.currentYear;
		this.yearModel= this.currentYear;
		this.calendar=getCalendar(this.currentYear,this.currentMonth);
		this.separatorModel="/";
		this.formatModel=1;
	}



	this.Selection= function(){
		this.yearSelected = this.yearModel;
		this.monthSelected = this.monthModel;
		this.calendar=getCalendar(this.yearSelected,this.monthSelected);
	}
	this.check=function(row,index){
		if(this.checked){
			if(row=="--"||index==0 || index==6){
				return true;
			}else{
				return false;
			}
		}else{
			if(row=="--"){
				return true;
			}else{
				return false;
			}
		}

	}
	this.range1=function(date,month,year){
		
		this.gotDate=date;
		this.gotMonth=month;
		this.gotYear=year;
		this.range=function(date,month,year,index){
			if(this.gotDate==undefined||this.gotMonth==undefined||this.gotYear==undefined){
				return false;
			}else if(this.gotDate==' ' && this.gotMonth==' ' && this.gotYear==' '){
				this.output="";
				this.clear=false;
				return false;
			}else{
				if(this.gotYear>year){
					return true;
				}else if(this.gotYear==year){
					if(this.gotMonth>month){
						return true;
					}else if(this.gotMonth==month){
						if (this.gotDate>date) {
							return true;
						}
					}
				}
			}
			return false;
		}

	}
	this.dateSelection= function(date,index){
		this.date=date;
		this.SelectionFormatSeparator();
		this.clicked=index;
		this.clear= true;
		this.selectedMonth= this.monthModel;
		this.selectedYear=this.yearModel;
		this.range1(date,this.selectedMonth,this.selectedYear,2)
	}
	this.SelectionFormatSeparator= function(){
		if(this.date!== undefined){
			if(this.formatModel==1){
					this.output=this.date + this.separatorModel + (this.monthModel+1) +this.separatorModel+this.yearModel;
			}
			if(this.formatModel==2){
				this.output=(this.monthModel+1)+ this.separatorModel+this.date +this.separatorModel+this.yearModel;
			}
			if (this.formatModel==3) {
				this.output=this.yearModel+this.separatorModel+(this.monthModel+1)+ this.separatorModel+this.date ;
			}
		}
	}
	
}








datePickerRangeCtrl['$inject'] = ['$scope'];
date.component('datePickerRange',{
	templateUrl:"dist/date/daterange.html",
	controller:datePickerRangeCtrl
})




function datePickerRangeCtrl($scope){
	this.year = Year();
	this.month = Months();
	this.currentYear = currentYear(); 
	this.currentMonth = currentMonth();
	this.days = getShortDayNames();
	this.separator= Separator();
	this.format=Format();
	this.$onInit= function(){
		this.currentYear = currentYear(); 
		this.currentMonth = currentMonth();
		this.monthModel= this.currentMonth;
		this.monthSelected= this.currentMonth;
		this.yearSelected= this.currentYear;
		this.yearModel= this.currentYear;
		this.calendar=getCalendar(this.currentYear,this.currentMonth);
		this.separatorModel="/";
		this.formatModel=1;
	}



	this.Selection= function(){
		this.yearSelected = this.yearModel;
		this.monthSelected = this.monthModel;
		this.calendar=getCalendar(this.yearSelected,this.monthSelected);
	}
	this.check=function(row,index){
		if(this.checked){
			if(row=="--"||index==0 || index==6){
				return true;
			}else{
				return false;
			}
		}else{
			if(row=="--"){
				return true;
			}else{
				return false;
			}
		}

	}
	this.range1=function(date,month,year){
		
		this.gotDate=date;
		this.gotMonth=month;
		this.gotYear=year;
		this.range=function(date,month,year,index){
			if(this.gotDate==undefined||this.gotMonth==undefined||this.gotYear==undefined){
				return false;
			}else if(this.gotDate==' ' && this.gotMonth==' ' && this.gotYear==' '){
				this.output="";
				this.clear=false;
				return false;
			}else{
				if(this.gotYear>year){
					return true;
				}else if(this.gotYear==year){
					if(this.gotMonth>month){
						return true;
					}else if(this.gotMonth==month){
						if (this.gotDate>date) {
							return true;
						}
					}
				}
			}
			return false;
		}

	}
	this.dateSelection= function(date,index){
		this.date=date;
		this.SelectionFormatSeparator();
		this.clicked=index;
		this.clear= true;
		this.selectedMonth= this.monthModel;
		this.selectedYear=this.yearModel;
		this.range1(date,this.selectedMonth,this.selectedYear,2)
	}
	this.SelectionFormatSeparator= function(){
		if(this.date!== undefined){
			if(this.formatModel==1){
					this.output=this.date + this.separatorModel + (this.monthModel+1) +this.separatorModel+this.yearModel;
			}
			if(this.formatModel==2){
				this.output=(this.monthModel+1)+ this.separatorModel+this.date +this.separatorModel+this.yearModel;
			}
			if (this.formatModel==3) {
				this.output=this.yearModel+this.separatorModel+(this.monthModel+1)+ this.separatorModel+this.date ;
			}
		}
	}
	
}