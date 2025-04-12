import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useNavigate, useLocation } from 'react-router-dom';
import { clearQueryState } from '../../Redux//querySlice';
import { FaArrowLeft} from "react-icons/fa";
import hero from "../../assets/herobg.png";

const verdictColors: Record<string, string> = {
  positive: 'bg-green-200 text-green-800',
  negative: 'bg-red-200 text-red-800',
  unverified: 'bg-purple-200 text-purple-800',
  neutral: 'bg-gray-200 text-gray-800',
};

interface CachedData {
  data: any;
  timestamp: number;
}

const CACHE_KEY = 'verdict_cache';
const CACHE_DURATION = 5 * 60 * 1000;

const CheckDetails = () => {
  const reduxData = useSelector((state: RootState) => state.query.data);
  const [localData, setLocalData] = useState<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Load cache if available
  useEffect(() => {
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      const parsed: CachedData = JSON.parse(cache);
      const isValid = Date.now() - parsed.timestamp < CACHE_DURATION;

      if (isValid) {
        setLocalData(parsed.data);
        // Redirect after remaining duration
        const timeout = setTimeout(() => {
          dispatch(clearQueryState());
          localStorage.removeItem(CACHE_KEY);
          navigate('/');
        }, CACHE_DURATION - (Date.now() - parsed.timestamp));

        return () => clearTimeout(timeout);
      } else {
        localStorage.removeItem(CACHE_KEY);
        dispatch(clearQueryState());
        navigate('/');
      }
    }
  }, [dispatch, navigate]);

  // Sync reduxData to cache and state
  useEffect(() => {
    if (reduxData) {
      const payload: CachedData = {
        data: reduxData,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
      setLocalData(reduxData);
    }
  }, [reduxData]);

  // Clear on unmount (when user leaves this page)
  useEffect(() => {
    return () => {
      dispatch(clearQueryState());
      localStorage.removeItem(CACHE_KEY);
    };
  }, [dispatch]);

  const handleBack = () => {
    dispatch(clearQueryState());
    localStorage.removeItem(CACHE_KEY);

    const currentPath = location.pathname;
    if (currentPath === "/signup" || currentPath === "/login") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  if (!localData) return <p>No data available.</p>;

  const { text: queryText, verdictFromApi } = localData;
  const activeVerdict = verdictFromApi.length > 0 ? verdictFromApi[0].verdict : 'neutral';

  const getButtonClass = (type: string) => {
    return activeVerdict === type ? verdictColors[type] : verdictColors['neutral'];
  };

  return (
    <div className='flex justify-center relative h-[calc(100vh-64px)]'>
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
      <div className="absolute inset-0 z-0 bg-[#121858]/80" />

      <div className="p-4 space-y-6 container max-w-7xl absolute z-10 text-white">
        <div className="flex justify-between items-center pt-11">
          <div className="text-xl font-semibold">Query: {queryText}</div>
          <div
          className="flex items-center gap-2 cursor-pointer mb-6 md:mb-[70px] hover:text-gray-200"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Back</span>
        </div>
        </div>

        <div className="flex gap-3 mb-4 text-white">
          <button className={`px-4 py-2 rounded-[8px] font-semibold ${getButtonClass('positive')}`}>True</button>
          <button className={`px-4 py-2 rounded-[8px] font-semibold ${getButtonClass('unverified')}`}>Unverified</button>
          <button className={`px-4 py-2 rounded-[8px] font-semibold ${getButtonClass('negative')}`}>False</button>
        </div>

        <div className="mt-16">
          {verdictFromApi.length === 0 ? (
            <p>No claims found for this query.</p>
          ) : (
            verdictFromApi.map((verdictItem: any, index: number) => (
              <div key={index} className="p-4 rounded-xl">
                <div className="mt-2 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {verdictItem.claims.map((claim: any, claimIndex: number) => (
                    <div key={claimIndex} className="flex flex-col gap-4 pt-2">
                      <p className="font-medium w-[90%]">{claim.text}</p>
                      {claim.claimReview.length > 0 && (
                        <div>
                          <button className="bg-[#333FE8] hover:bg-blue-700 text-white px-4 py-2 rounded-[8px] font-semibold">
                            <a
                              href={claim.claimReview[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Dig more
                            </a>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckDetails;
