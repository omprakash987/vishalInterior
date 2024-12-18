import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../designComponents/Navbar';

const GetModularKitchenDesign = () => {
    const { data: response = {}, isLoading, refetch, isRefetching } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`/api/post/modular-kitchen`);
            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || 'Failed to fetch posts');
            }

            return data; 
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    const posts = response.data || []; // Extract the `data` array

    return (
        <div className="container mx-auto p-6">
            <Navbar/>
            <h1 className="text-3xl font-bold mb-6 text-left mt-10">BModular Kitchen Designs</h1>
            {isLoading || isRefetching ? (
                <div className="flex justify-center items-center h-32">
                    <p className="text-lg font-semibold">LOADING....</p>
                </div>
            ) : posts.length === 0 ? (
                <p className="text-center my-4 text-lg font-medium">No posts in this tab. Switch 👻</p>
            ) : (
                <div className="space-y-8">
                    {posts.map((post) => (
                        <div
                            key={post._id}
                            className="border p-4 rounded-lg shadow-md  bg-white"
                        >
                            {post.img && (
                                <img
                                    src={post.img}
                                    alt={post.text}
                                    className="w-full h-96 object-cover rounded mb-4"
                                />
                            )}
                            <p className="text-center text-gray-700 font-medium text-lg">{post.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GetModularKitchenDesign;
