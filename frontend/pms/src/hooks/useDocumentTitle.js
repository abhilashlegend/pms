import { useEffect } from "react";

const useDocumentTitle = (title) => {
    useEffect(() => {
        // Capture the current title
        const originalTitle = document.title;

        // Set the new title
        document.title = title;

        // Cleanup: When the component unmounts ( user leaves the page),
        // restore the original title

        return () => {
            document.title = originalTitle;
        }
    }, [title])
}

export default useDocumentTitle;