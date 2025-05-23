import mongoose from "mongoose";


//Schema
const userSchema = new mongoose.Schema({
    //member since july 2021 'createdAt'
    username:{
        type:String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[],
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[],
        }
    ],
    profileImg:{
        type:String,
        default:"",
    },
    coverImg:{
        type:String,
        default:"",
    },
    bio:{
        type: String,
        default:"",
    },
    link:{
        type: String,
        default:"",
    },
    likedPosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: [],
        }
    ]
}, {timestamps: true});


 
//model - using above Schema 
const User = mongoose.model("User", userSchema);

export default User;