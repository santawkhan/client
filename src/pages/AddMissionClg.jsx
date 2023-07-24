import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token
const AddMissionClg = () => {
    const Card = useLoaderData();
    const { collegeName } = Card;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())


    };
    console.log(errors);

    return (
        <div >
            <form className='grid grid-cols-1 md:grid-cols-3 p-10 bg-amber-100' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Candidate Name</span>

                    </label>
                    <input type="text" placeholder="Candidate Name" {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Subject</span>

                    </label>
                    <input type="text" placeholder="Subject" {...register("subject", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Candidate Email</span>

                    </label>
                    <input type="email" placeholder="Candidate Email" {...register("email", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Candidate Phone number</span>

                    </label>
                    <input type="number" placeholder="Candidate Phone number" {...register("phone", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Add Image</span>

                    </label>
                    <input type="file" {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Candidate address</span>

                    </label>
                    <input type="text" placeholder="address" {...register("address", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">date of birth</span>

                    </label>
                    <input type="date" placeholder="date of birth"  {...register("date", {
                        valueAsDate: true,
                    })}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <input className='btn btn-primary mt-4 text-center' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddMissionClg;