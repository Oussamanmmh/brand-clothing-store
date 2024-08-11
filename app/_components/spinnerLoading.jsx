export default function SpinnerLoading({screen}) {
    return (
        <>
        <div className={`${screen ?" h-screen":""}flex justify-center items-center`}>
            <div className={`${screen ? "size-32":"size-6"} animate-spin rounded-full border-t-2 border-b-2 border-gray-900`}></div>
        </div>
        </>
    );
    }