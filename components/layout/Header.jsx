
import Select from '../ui/Select';

const Header = () => {

  
    return (
<div className="relative w-full bg-linear-to-br from-amber-100 via-orange-100 to-yellow-50 rounded-3xl shadow-lg overflow-hidden p-6 sm:p-10">

  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">

    <div className="flex-1 text-center sm:text-right">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
        به <span className="text-amber-600">آشپزخونه</span> خوش اومدی 🍳
      </h1>
      <p className="text-gray-600 mt-2 text-base sm:text-lg">
        دستور غذای دلخواهت رو جست‌وجو کن یا از بین فیلترها انتخاب کن
      </p>
    </div>


    <div className="hidden sm:block w-48 h-48">
      <img
        src="/images/headrFood.png"
        alt="chef"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/*  جست‌وجو */}
  <div className="relative max-w-2xl mx-auto mb-10">
    <input
      type="text"
      placeholder="دنبال چه غذایی می‌گردی...؟"
      className="w-full h-14 pl-12 pr-5 rounded-2xl border border-amber-400 text-gray-700 
                 placeholder:text-gray-400 focus:outline-none focus:ring-4 
                 focus:ring-amber-200 shadow-sm font-medium text-right text-lg"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-4 top-4 w-6 h-6 text-amber-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    <Select
      className="w-full"
      text="⏱️ زمان پخت"
      border="select-primary"
      options={["20 تا 30 دقیقه", "30 تا 50 دقیقه", "50 تا 90 دقیقه"]}
    />
    <Select
      className="w-full"
      text="🧑‍🍳 میزان سختی"
      border="select-secondary"
      options={["آسان", "متوسط", "دشوار"]}
    />
    <Select
      className="w-full"
      text="🍽️ نوع غذا"
      border="select-accent"
      options={["صبحانه", "ناهار", "شام", "دسر", "کیک"]}
    />
  </div>

</div>

    );
}

export default Header;
