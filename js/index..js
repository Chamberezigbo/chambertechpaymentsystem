

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

// signing in function //
function sign() {
   let getId = document.getElementById('staffId').value;
   let getDat = document.getElementById('staffDate').value;
   let signInInfo = document.getElementById('signinInfo'); 

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
                signInInfo.classList.remove('d-none');
                setTimeout(() => {
                    signInInfo.classList.add('d-none');
                }, 1000);
                allStaff[index] = staff;
                console.log(allStaff)
                
            }
        }    
    }
  

}
 
// checking for payment of the staff //
function payStaff() {
    document.getElementById('paymentGateway').classList.remove('d-none')
}

function checkPayment() {
    let checkId = document.getElementById("checkPaymentId").value
    let danger = document.getElementById("danger")
    let success = document.getElementById("success")
    let info = document.getElementById("info")
    if (checkId == "") {
        danger.classList.remove('d-none')
        setTimeout(() => {
            danger.classList.add('d-none')
        }, 2500);
        return;
    }
    for (let i = 0; i < allStaff.length; i++) {

        if (checkId == allStaff[i].id && allStaff[i].days >= 5 ) {
            success.classList.remove('d-none')
            success.innerHTML =  `dear ${allStaff[i].fullName} you can withdraw`
            setTimeout(() => {
                success.classList.add('d-none')
            }, 1500);
        }else{
            info.classList.remove('d-none')
            info.innerHTML = `This ${checkId}ID cannot withdraw`
            setTimeout(() => {
                info.classList.add('d-none')
            }, 2500);
            success.classList.add('d-none')
        }
    }
}
