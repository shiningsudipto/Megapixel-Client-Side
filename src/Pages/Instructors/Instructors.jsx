
import useInstructors from "../../Hook/useInstructors";
import InstructorCard from "../../components/InstructorCard";
import PageTitle from "../../components/PageTitle";

const Instructors = () => {
    const [instructors, isLoading] = useInstructors();
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }
    return (
        <div>
            <div>
                <PageTitle
                    heading={"Our Instructors"}
                    subHeading={"We have best instructors over the world"}
                ></PageTitle>
            </div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-14">
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;