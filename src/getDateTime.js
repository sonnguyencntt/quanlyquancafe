function getFirstWeektoLastWeek(now){

	var ObjectDay = 
		{
			Firstday  : 0,
			Lastday : 6
		}
	
	switch (now)
{
    case 0 : {
		return ObjectDay
       
    }
    case 1 : {
		return ObjectDay = 
		{
			Firstday : 1,
			Lastday : 5,
		}
       
	}
	case 2 : {
		

		return ObjectDay = 
		{
			Firstday :2,
			Lastday : 4,
		}
        
	}
	case 3 : {
		return ObjectDay = 
		{
			Firstday : 3,
			Lastday : 3,
		}
        
	}
	
	case 4 : {
		return ObjectDay = 
		{
			Firstday : 4,
			Lastday : 2,
		}
      
	}
	case 5 : {
		return ObjectDay = 
		{
			Firstday : 5,
			Lastday : 1,
		}
       
	}
	case 6 : {
     
        return ObjectDay = 
		{
			Firstday : 6,
			Lastday : 0,
		}
    }
    default : {
		console.log('Gia tri dau vao khong hop le, vui long kiem tra lai');
		return null;
    }
}
}

function subtractAndAddDateTime(object){
	let ObjectFormatDatetime = 
	{
		FromDay : '1/1/1990',
		NextDay : '9/9/9999'
	}
	const subTractday = new Date(new Date().setDate(new Date().getDate()-object.Firstday));

	let formatted_supTractday = subTractday.getDate() + "/" + (subTractday.getMonth() + 1) + "/" + subTractday.getFullYear();

	const addDay = new Date(new Date().setDate(new Date().getDate()+object.Lastday));

	let formatted_addDay = addDay.getDate() + "/" + (addDay.getMonth() + 1) + "/" + addDay.getFullYear();

	return ObjectFormatDatetime = 
	{
		FromDay : formatted_supTractday,
		NextDay : formatted_addDay
	}

}

export default function(){

	const date = new Date();
 
	const now = date.getDay();

	const ObjectDay = getFirstWeektoLastWeek(now);

	

	let FristAndLastDateofWeek = 
	{
		FromDay : '1/1/1990',
		NextDay : '9/9/9999'
	}
	return  FristAndLastDateofWeek = subtractAndAddDateTime(ObjectDay);
	
	
}
