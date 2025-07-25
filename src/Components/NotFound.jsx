
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <p className="text-3xl text-gray-600 mb-4">عذراً! الصفحة غير موجودة</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;