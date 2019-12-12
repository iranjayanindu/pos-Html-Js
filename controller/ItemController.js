// -------------item----------------------------------------------------
$('#AddItem').click(function(){
    var itemId=$('#inputZip').val();
    var itemName=$('#inputFirstname').val();
    var itemDescription=$('#inputAddress').val();
    var qty=$('#inputNic').val();
    var UnitPrice=$('#inputcontact').val();

    $('#itemTable').children('tbody').append(
        "<tr>\n" +
        "                            <th scope=\"row\">1</th>\n" +
        "                            <td>"+itemId+"</td>\n" +
        "                            <td>"+itemName+"</td>\n" +
        "                            <td>"+qty+"</td>\n" +
        "                            <td>"+itemDescription+"</td>\n" +
        "                            <td>"+UnitPrice+"</td>\n" +
        "                        </tr>"
    );
    $('#itemTable').children('tbody').children('tr').click(function () {
        var itemId=$($(this).children()[1]).text();
        var itemName=$($(this).children()[2]).text();
        var itemQty=$($(this).children()[3]).text();
        var itemDis=$($(this).children()[4]).text();
        var itemPrice=$($(this).children()[5]).text();

        $('#inputZip').val(itemId);
        $('#inputFirstname').val(itemName);
        $('#inputAddress').val(itemDis);
        $('#inputNic').val(itemQty);
        $('#inputcontact').val(itemPrice);


    });



});