function CustomerDTO(id,fname,lname,address,nic,contact){
    var _id=id;
    var _fname=fname;
    var _lname=lname;
    var _address=address;
    var _nic=nic;
    var _contact=contact;

    this.getCustomerID=function(){
        return _id;
    }

    this.getCustomerFName=function(){
        return _fname;
    }

    this.getCustomerLName=function(){
        return _lname;
    }

    this.getCustomerAddress=function(){
        return _address;
    }

    this.getCustomerNic=function(){
        return _nic;
    }

    this.getCustomerContact=function(){
        return _contact;
    }

    this.setCustomerID=function(id){
        _id=id;
    }

    this.setCustomerFName=function(fname){
        _fname=fname;
    }

    this.setCustomerLName=function(lname){
        _lname=lname;
    }

    this.setCustomerAddress=function(address){
        _address=address;
    }
    this.setCustomerNic=function(nic){
        _nic=nic
    }

    this.setCustomerContact=function(contact){
        _contact=contact;
    }

}