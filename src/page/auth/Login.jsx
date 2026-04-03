import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, LogIn } from 'lucide-react';
import { IMAGES } from '../../assets';
import FormInput from '../../component/ui/FormInput';
import Button from '../../component/ui/Button';
import { loginSchema } from '../../lib/validation/login.schema';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    const onSubmit = async (data) => {
        console.log('Login Data:', data);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#0F111A] flex items-center justify-center p-6 manrope">
            <div className="w-full max-w-[480px] bg-[#1A1F2B]/60 border border-white/5 rounded-[40px] p-10 md:p-14 backdrop-blur-xl shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-500">

                {/* Logo & Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex items-center">
                        <img src={IMAGES.logo} alt="EcoRide" className="w-36 h-36 object-contain -mt-10" />
                    </div>
                    <div className="space-y-2 -mt-8">
                        <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
                        <p className="text-primary text-sm tracking-wide">Sign in to your admin account</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
                        <FormInput
                            label="Email Address"
                            placeholder="admin@ecoride.company"
                            icon={Mail}
                            error={errors.email}
                            {...register('email')}
                        />

                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            icon={Lock}
                            error={errors.password}
                            {...register('password')}
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-3 pl-1">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                {...register('rememberMe')}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/10 bg-white/5 checked:border-primary checked:bg-primary transition-all duration-300"
                            />
                            <svg
                                className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-secondary opacity-0 peer-checked:opacity-100"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <label htmlFor="rememberMe" className="text-sm text-white/40 cursor-pointer select-none">
                            Remember me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        fullWidth
                        icon={LogIn}
                        className="bg-[#F8F9FA] text-[#101319] hover:bg-white py-5 rounded-[20px] shadow-2xl shadow-black/20 font-bold"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;