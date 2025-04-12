import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface QueryResponse {
    userId: string;
    text: string; // this is the main query text
    verdictFromApi: Verdict[];
    // ...
  }
  
  export interface Verdict {
    verdict: 'positive' | 'negative' | 'neutral' | 'unverified';
    summary: {
      positive: number;
      negative: number;
      neutral: number;
      unverified: number;
    };
    claims: Claim[];
  }
  
  export interface Claim {
    text: string;
    claimant?: string;
    claimDate?: string;
    claimReview: ClaimReview[];
  }
  
  export interface ClaimReview {
    publisher: {
      name: string;
      site: string;
    };
    url: string;
    title: string;
    reviewDate: string;
    textualRating: string;
    languageCode: string;
  }
interface QueryState {
  data: QueryResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: QueryState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchQueries = createAsyncThunk(
  'query/fetchQueries',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/queries`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Failed to fetch queries');
    }
  }
);

export const postQuery = createAsyncThunk(
  'query/postQuery',
  async (payload: { text: string }, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const token = state.auth.token;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/queries`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Failed to post query');
    }
  }
);

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    clearQueryState(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQueries.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQueries.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(postQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postQuery.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postQuery.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearQueryState } = querySlice.actions;
export default querySlice.reducer;
