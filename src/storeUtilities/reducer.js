import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchBrandDetails = createAsyncThunk('root/brandDetails', async () => {
    const response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
    return response.data;
  });

export const fetchBrandImages = createAsyncThunk('root/brandImages', async () => {
    const response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
    return response.data;
  });

export const rootSlice = createSlice({
  name: 'details',
  initialState: {
    brandDetails: [],
    countryDetails:[],
    status:'idle',
    error: null,
    brandImages:[]
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBrandDetails.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBrandDetails.fulfilled, (state, action) => {
        state.status = 'succeeded'
        let tempObj = {};
        action.payload.forEach((item)=> {
          tempObj[item.Country] ?
            tempObj[item.Country].push(item.Brand):
            tempObj[item.Country]=[item.Brand];
            
        });
        state.countryDetails = tempObj;
        state.brandDetails = action.payload;
      })
      .addCase(fetchBrandDetails.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchBrandImages.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBrandImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brandImages = action.payload;
      })
      .addCase(fetchBrandImages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default rootSlice.reducer