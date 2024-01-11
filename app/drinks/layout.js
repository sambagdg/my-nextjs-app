

const DrinksLayout = ({children}) => {
    return (
        <div>
            <div className="mockup-code mb-8 bg-white shadow-2xl text-black">
                <pre data-prefix="$">
                    <code>npx create-next-app@latest myApp</code>
                </pre>
            </div>
            {children}
        </div>
    );
};

export default DrinksLayout;
