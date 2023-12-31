import { Link } from "react-router-dom";
import { FooterContainer } from "../../containers";
import authTexts from '../../fixtures/authText'


const inputClass = "rounded-[4px] p-3 w-full md:col-span-2 border-slate-400 border outline-none placeholder:capitalize placeholder:text-slate-300 text-white bg-gray-500/30"

const AuthForm = ({OnValidSubmit, register, errors, authMethod, email}) => {
    
    return (
        <form
            onSubmit={OnValidSubmit}
            className={`w-full h-full p-2 md:p-10 flex flex-col items-center md:justify-start gap-2`}
        >
            <h1 className='text-3xl self-start p-1 font-semibold capitalize my-4 text-white'>
                {authMethod === "signup" ? authTexts.signup.title : authTexts.login.title}
            </h1>
            <div className='flex flex-col gap-3 w-full'>
                <input
                    type='email'
                    id='email_user'
                    placeholder='email address'
                    className={inputClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                />
                {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}

                <input
                    type='password'
                    id='password_user'
                    placeholder='password'
                    className={inputClass}
                    {...register("password")}
                />
                {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
            </div>

            <button className={`rounded-[4px] bg-[#e50914] font-semibold text-[1.05rem] md:text-lg border-none border-0 
            capitalize w-full text-white flex items-center justify-center gap-3 py-2 mt-8 mb-6`}>
                {authMethod === "signup" ? authTexts.signup.btnText : authTexts.login.btnText}
            </button>

            <FormTexts authMethod={authMethod}/>

            <div className='block md:hidden'>
                <FooterContainer />
            </div>
        </form >
    );
}

const FormTexts = ({ authMethod }) => {
    return (
        <>
            <div className='flex justify-between items-center w-full text-[#b3b3b3] mb-5 md:mb-10'>
                <div>
                    <input
                        type="checkbox"
                        className='mx-1 cursor-pointer'
                        name="remember_me"
                        id="rember_me"
                    />
                    <label htmlFor="rember_me" className='text-sm cursor-pointer'>Remember me</label>
                </div>
                <Link to="/" className='text-sm'>Need help?</Link>
            </div>

            <p className='text-[#8c8c8c] self-start md:text-sm'>
                {authMethod === "signup" ? authTexts.signup.isUser : authTexts.login.isUser}
                <Link
                    to={authMethod === "signup" ? authTexts.signup.linkTo : authTexts.login.linkTo}
                    className='text-white ml-1 capitalize'
                >
                    {authMethod === "signup" ? authTexts.signup.isUserLink : authTexts.login.isUserLink}
                </Link>
            </p>
            <p className='text-[13px] md:text-sm text-[#b3b3b3] md:mb-24 lg:mb-28'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-700'>Learn more.</Link>
            </p>

        </>
    )
}


export default AuthForm