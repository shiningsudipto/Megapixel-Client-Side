import useInstructors from "../../Hook/useInstructors";
import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "../../components/InstructorCard";

const InstructorSection = () => {
    const [instructors] = useInstructors();
    const slicedInstructor = instructors.slice(0, 6);
    console.log('total instructors:', instructors, "sliced instructors:", slicedInstructor);
    return (
        <div>
            <div>
                <SectionTitle
                    heading={"popular instructors"}
                    subHeading={"Most Enrolled Classes Instructors"}
                ></SectionTitle>
            </div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                    {
                        slicedInstructor.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        >
                        </InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorSection;