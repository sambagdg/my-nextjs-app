

const DrinksLayout = ({children}) => {
    return (
        <div className="">
            <div className="mockup-code mb-8  bg-gray-100 shadow-inner text-black">
                <pre data-prefix="$">
                    <code>npx create-next-app@latest myApp</code>
                </pre>
            </div>
            {children}
        </div>
    );
};

export default DrinksLayout;
