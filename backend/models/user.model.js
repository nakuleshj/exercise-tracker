const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    writeConcern: {
        j: true,
        wtimeout: 1000
      },
    timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;