

// staff database //

let allStaff = [
    staffA = {
        id: 112 ,
        fullName: 'Chamberlain',
        days:1
    },
    staffB = {
        id: 113 ,
        fullName: 'danio',
        days:1
    },
    staffC = {
        id: 114 ,
        fullName: 'victor',
        days:1
    },
    staffD = {
        id: 115 ,
        fullName: 'dangote',
        days:1
    },
    staffE = {
        id: 116 ,
        fullName: 'erlin',
        days:1
     
    }
]

function sign() {
   let getId = document.getElementById('staffId').value;
   let getDat = document.getElementById('staffDate').value;

   if (getId == "" || getDat == "") {
       alert('enter valid input')
    }else{
        for (let index = 0; index < allStaff.length; index++) {
            if (getId == allStaff[index].id) {
                let staff = {
                    id : allStaff[index].id,
                    fullName : allStaff[index].fullName,
                    days : +allStaff[index].days + 1,
                    date : allStaff[index].date = getDat
                }
                allStaff[index] = staff;
                console.log(allStaff)
                
            }
        }    
    }
  

}
 
function payStaff(params) {
    document.getElementById('paymentGateway').classList.remove('d-none')
}

function checkPayment() {
    let checkId = document.getElementById("newStaffId").value
    if (checkId == "") {
        alert("Enter valid id")
    }
    for (let i = 0; i < allStaff.length; i++) {
        let success = document.getElementById("success")
        let danger = document.getElementById("danger")
        if (checkId == allStaff[i].id && allStaff[i].counter >= 5 ) {
            alert("you can withdraw");
            success.classList.remove('d-none')
        }else{
             alert("you cannot withdraw");
            danger.classList.remove('d-none')
            success.classList.add('d-none')
        }return;
    }
}