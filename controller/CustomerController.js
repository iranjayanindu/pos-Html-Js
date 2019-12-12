// --------------customer--------------------------------------------------------------
$('#Addbtn').click(function(){



    var cusID=$('#inputcusid').val();
    if(/^(C00)[-]{1}[0-9]{3,4}$/.test(cusID)){
        $("#inputFirstname1").focus();
        var cusFName=$('#inputFirstname1').val();
        if(/[A-z]{5,}/.test(cusFName)){
            $('#inputLastName1').focus();
            var cusLName=$('#inputLastName1').val();
            if(/[A-z]{5,}/.test(cusLName)){
               $('#inputAddress1') .focus();
                var cusAddre=$('#inputAddress1').val();
                if(/[A-z0-9]{5,}/.test(cusAddre)){
                    $('#inputNic1').focus();
                    var cusNic=$('#inputNic1').val();
                    if(/[A-z0-9]{5,}/.test(cusNic)){
                        $('#inputcontact1').focus();
                        var cusCon=$('#inputcontact1').val();
                        if(/\d/.test(cusCon)){

                        }else {
                            alert("Contact num is incorrect");
                        }
                    }else{
                        alert("NIC is incorrect");
                    }
                }else{
                    alert("Address is incorrect");
                }
            }else {
                alert("Last name is incorrect");
            }
        }else {
            alert("Fast name is incorrect");
        }
    }else{
        alert("Customer Id is incorrect");
    }

    //var cusFName=$('#inputFirstname1').val();
  //  var cusLName=$('#inputLastName1').val();
    //var cusAddre=$('#inputAddress1').val();
   // var cusNic=$('#inputNic1').val();
   // var cusCon=$('#inputcontact1').val();

    var customer=new CustomerDTO(cusID,cusFName,cusLName,cusAddre,cusNic,cusCon);
       alert("work1111111111111") ;

    customerTable.push(customer);
    alert("work2222222222222222") ;

    clearAllValu();
    alert("work333333333333333") ;
    loadAllCustomer();

    function loadAllCustomer(){
        for(var c of customerTable){
            var id=c.getCustomerID();
            var fname=c.getCustomerFName();
            var lname=c.getCustomerLName();
            var address=c.getCustomerAddress();
            var nic=c.getCustomerNic();
            var con=c.getCustomerContact();


            $('#custable').children('tbody').append(
                "<tr>\n" +
                "                            <th scope=\"row\">4</th>\n" +
                "                            <td>"+cusID+"</td>\n" +
                "                            <td>"+cusFName+"</td>\n" +
                "                            <td>"+cusLName+"</td>\n" +
                "                            <td>"+cusAddre+"</td>\n" +
                "                            <td>"+cusNic+"</td>\n" +
                "                            <td>"+cusCon+"</td>\n" +
                "                        </tr>");
        }
    }






    $('#custable').children('tbody').children('tr').click(function () {
        var id=$($(this).children()[1]).text();
        var fname=$($(this).children()[2]).text();
        var lname=$($(this).children()[3]).text();
        var address=$($(this).children()[4]).text();
        var nic=$($(this).children()[5]).text();
        var cont=$($(this).children()[6]).text();


        $('#inputcusid').val(id);
        $('#inputFirstname1').val(fname);
        $('#inputLastName1').val(lname);
        $('#inputAddress1').val(address);
        $('#inputNic1').val(nic);
        $('#inputcontact1').val(cont);

        $('#custable tr').on('dblclick',function () {
            $(this).remove();

        })



    });


});

function clearAllValu(){
    $('#inputcusid').val("");
    $('#inputFirstname1').val("");
    $('#inputLastName1').val("");
    $('#inputAddress1').val("");
    $('#inputNic1').val("");
    $('#inputcontact1').val("");
}


// $('#custable').children('tbody').append(
//     "<tr onclick='doclick(this)'>\n" +
//     "                            <th scope=\"row\">4</th>\n" +
//     "                            <td>"+cusID+"</td>\n" +
//     "                            <td>"+cusFName+"</td>\n" +
//     "                            <td>"+cusLName+"</td>\n" +
//     "                            <td>"+cusAddre+"</td>\n" +
//     "                            <td>"+cusNic+"</td>\n" +
//     "                            <td>"+cusCon+"</td>\n" +
//     "                        </tr>"
// );
//
// function doclick(data){
//     $(data).dblclick(function () {
//         $(this).remove();
//     });
// }
