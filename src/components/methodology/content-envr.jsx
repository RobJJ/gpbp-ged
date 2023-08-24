import Image from "next/image";
import React from "react";
import EnvrTable from "./content-envr-table";
import airQualityImage from "../../../public/air_quality_breakdown.png";

export default function ContentEnvironment() {
  return (
    <>
      <span className="text-2xl flex justify-center items-center w-[33px] h-[33px] bg-[#4345AA] text-white font-bold">
        2
      </span>
      <h2 className="text-3xl text-[#4345AA] font-bold ">
        Environmental Score Review
      </h2>
      <p>
        This section explains how an environmental score for different regions
        is calculated. This score gives an idea of how the environment is
        performing in a particular region, based on various factors like air
        quality, temperature, precipitation, and green spaces.
      </p>
      <h3 className="text-xl text-[#4345AA] font-bold">
        Here are the crucial components:
      </h3>
      <p className="pt-3">
        <b>Air Quality:</b> This is measured by looking at five different types
        of pollutants in the air. Each pollutant is scored on a scale of 0-500
        (with higher scores indicating worse air quality). Then, the score for
        the worst pollutant is chosen to represent overall air quality. This
        number tells us about the air quality for every day in the year, and
        then we determine the percentage of days per day had good, moderate, or
        poor air quality .
      </p>
      <p>
        <b>Weather:</b> We look at the temperature for every day in the past
        decade, find out the yearly change in the maximum recorded temperature,{" "}
        {"what's"} {'"extremely hot"'} (top 10%) and {'"extremely cold"'}{" "}
        (bottom 10%), and then see how many such days there were in each year.
        Similarly, we also keep track of the change in the maximum amount of
        rainfall in a year, and the proportion of extremely wet or dry days.
      </p>
      <p>
        <b>Green Space:</b> We use satellite images to see how much of a region
        is covered by green spaces like forests, grass, and shrubs, and whether
        this is increasing or decreasing over time. We also take a look at the
        change in the region’s built environment when there’s a decrease in
        green space.
      </p>
      <p className="pt-3">
        After we have all this data, we need to combine it into a single
        environmental score. But because these factors are all different and
        affect the environment in different ways, we {"can't"} just combine them
        in a conventional manner. Instead, we use a method called Principal
        Component Analysis (PCA) that finds the most important factors and
        combines them into indices to represent the above components. Finally,
        we take the weighted average of the scored components as the environment
        score.
      </p>
      <p>
        The final score ranges from 0 to 100, where higher scores represent a
        healthier environment. Some factors, like good air quality or more green
        spaces, increase the score. Others, like high levels of pollution or
        extreme temperatures, decrease the score, although the relationship is
        not always linear.
      </p>
      <h3 className="text-xl text-[#4345AA] font-bold pt-5">Detailed steps:</h3>
      {/* 2.1 */}
      <div id="envr.1" className="flex flex-col gap-3 w-full">
        <h4 className="text-xl font-semibold">2.1 Air quality index</h4>
        <p>
          We first calculate the Air Quality Index (AQI) based on the
          measurements of five pollutants: PM2.5, NO2, CO, SO2, and O3. We
          create sub-indexes for each of these pollutants. The concentration
          measurements of these pollutants are in different units, so they are
          first converted into a common scale.
        </p>
        <p>
          The methodology for the calculation follow those defined by the United
          States Environmental Protection Agency (EPA).
        </p>
        <Image
          src={airQualityImage}
          alt="Air Quality Calculation Breadown"
          className="my-5"
        />
        <span>
          1. <b>PM2.5 Sub-Index Calculation:</b> The PM2.5 values are measured
          in µg/m³. These are then re-scaled to create a value between 0-500
          (based on guidance from the EPA. The PM2.5 Sub-Index value is a scaled
          representation of the PM2.5 concentration.
        </span>
        <span>
          2. <b>NO2 Sub-Index Calculation:</b> The NO2 values are expressed in
          parts per billion (PPB). These are then re-scaled to create a value
          between 0-500 (based on guidance from the EPA). The NO2 sub-index is a
          scaled representation of the NO2 concentration.
        </span>
        <span>
          3. <b>CO Sub-Index Calculation:</b> The CO is expressed in mg / m3
          (milligrams per cubic meter of air). These are then re-scaled to
          create a value between 0-500 (based on guidance from the EPA). The CO
          Sub-Index is a scaled representation of the CO concentration.
        </span>
        <span>
          4. <b>SO2 Sub-Index Calculation:</b> The SO2 values are expressed in
          ug / m3 (micrograms per cubic meter of air). These are then re-scaled
          to create a value between 0-500 (based on guidance from the EPA). The
          SO2 Sub-Index is a scaled representation of the SO2 concentration.
        </span>
        <span>
          5. <b>O3 Sub-Index Calculation:</b> O3 is measured in ug / m3
          (micrograms per cubic meter of air). These are then re-scaled to
          create a value between 0-500 (based on guidance from the EPA). The O3
          Sub-Index is a scaled representation of the O3 concentration.
        </span>
        <span>
          6. <b>Final AQI Calculation:</b> The final Air Quality Index (AQI) is
          a single number summarizing air quality, calculated from five
          pollutant sub-indices: PM2.5, SO2, NO2, CO, and O3.
        </span>
        <ul className="flex flex-col gap-2">
          <h4>The AQI calculation follows two rules:</h4>
          <div>
            <li>
              <span className="mr-2 text-lg">&#x2022;</span>
              <b>Rule 1:</b> The PM2.5 or PM10 sub-index must be available, as
              particulate matter significantly impacts human health.
            </li>
            <li>
              <span className="mr-2 text-lg">&#x2022;</span>
              <b>Rule 2:</b> At least three out of the five total sub-indices
              must be available to ensure the AQI reflects various pollutants.
            </li>
          </div>
        </ul>
        <p>
          If these conditions {"aren't"} met, the AQI is set as {"'NaN'"} (i.e.
          it’s a missing value), a marker indicating an undefined value.
        </p>
        <p>
          The final AQI itself is calculated as the maximum value of these
          sub-indices. This means that the AQI reflects the level of the most
          problematic pollutant at that time.
        </p>
        <div className="w-full bg-[#DEEDFF] flex justify-center items-center py-7 px-10 my-5 rounded">
          <p className="italic">
            For example, if the NO2 level is higher than the other pollutants,
            the NO2 sub-index will be the final AQI score. This is done because
            the health effects of the worst pollutant are considered to
            represent the overall air quality.
          </p>
        </div>
        <p>
          AQI values are on a scale from 0 to 500, where a higher value
          indicates poorer air quality with greater potential impact on human
          health. AQI scores are as follows:
        </p>
        <ul>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>0 to 50 represents
            good air quality
          </li>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>
            51 to 100 is satisfactory
          </li>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>101 to 200 is moderate
          </li>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>
            201 to 300 is poor
          </li>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>
            301 to 400 is very poor
          </li>
          <li>
            <span className="mr-2 text-lg">&#x2022;</span>
            401 to 500 is severe
          </li>
        </ul>
        <p>
          For each year, we then count the number of days each district
          experiences for each level of AQI (i.e. good, satisfactory, moderate,
          poor, very poor or severe).
        </p>
        <p>
          We then calculate the percentage of days in each year (per district)
          that fall into each AQI category.
        </p>
      </div>
      {/* 2.2 */}
      <div id="envr.2" className="flex flex-col gap-3 w-full pt-5">
        <h4 className="text-xl font-semibold">2.2 Extreme Weather Scores</h4>
        <h5 className="text-md font-semibold">Extreme Temperatures:</h5>
        <p>
          We take data on the average temperature of each region from 2000-2010
          to determine the 90th and 10th percentile. We use this to identify a{" "}
          {"'hot threshold'"} (90th percentile) and a {"'cold threshold'"} (10th
          percentile).
        </p>
        <p>
          For each year, we count the number of days in each region where the
          average temperature was above the hot threshold (90th percentile). The
          number of these extremely hot days is then divided by the total number
          of days to get a ratio, representing the proportion of the year with
          extremely hot temperatures. Similarly, for each year, we count the
          number of days in each region where the average temperature was below
          the cold threshold (10th percentile). The number of these extremely
          cold days is then divided by the total number of days to get a ratio,
          representing the proportion of the year with extremely cold
          temperatures. We also take the annual percentage changes of the
          percentage of number of hot and cold days.
        </p>
        <p>
          We additionally compute the annual percentage change in the region’s
          maximum temperature.
        </p>
        <h5 className="text-md font-semibold">Extreme Precipitation:</h5>
        <p>
          We take data on the average precipitation of each region from
          2000-2010 to determine the 90th and 10th percentile. We use this to
          identify a {"'wet threshold'"} (90th percentile) and a{" "}
          {"'dry threshold'"} (10th percentile).
        </p>
        <p>
          For each year, we count the number of days in each region where the
          average precipitation was above the wet threshold (90th percentile).
          The number of these extremely wet days is then divided by the total
          number of days to get a ratio, representing the proportion of the year
          with extremely high precipitation. Similarly, for each year, we count
          the number of days in each region where the average temperature was
          below the dry threshold (10th percentile). The number of these
          extremely dry days is then divided by the total number of days to get
          a ratio, representing the proportion of the year with extremely low
          precipitation. We also take the annual percentage changes of the
          percentage of number of wet and dry days.
        </p>
        <p>
          We additionally compute the annual percentage change in the region’s
          maximum precipitation.
        </p>
      </div>
      {/* 2.3 */}
      <div id="envr.3" className="flex flex-col gap-3 w-full pt-5">
        <h4 className="text-xl font-semibold">2.3 Forest Score</h4>

        <p>
          We use day time satellite imagery to measure changes in green and
          built coverage from one year to another. Regions that experience large
          reductions in green space contribute to a lower score, while regions
          that experience growth in green space contribute to a higher score.
        </p>
        <p>
          Additionally, regions which have positive annual percentage changes in
          built coverage and a negative percentage changes in the green coverage
          will contribute towards a lower score, while having a positive annual
          percentage change in both coverages yield 0 impact to the forest
          score.
        </p>
        <h3 id="envr.4" className="text-xl text-[#4345AA] font-bold pt-5">
          Calculating the overall environmental score
        </h3>
        <p>
          We then calculate an overall environmental score using Principal
          Component Analysis (PCA). PCA is an unsupervised learning technique
          that is used for ‘dimensionality reduction’. It transforms the
          original set of variables into a new set of uncorrelated variables,
          known as principal components.
        </p>
        <p>
          We calculate the overall environmental score by conducting PCA on the
          following variables:
        </p>
        <div className="w-full mt-4">
          <EnvrTable />
        </div>
        <p className="pt-5">
          These indicators are first standardized to have a mean of 0 and
          standard deviation of 1, and then principal component analysis (PCA)
          is used to combine them into their respective component scores. This
          is done to reduce dimensionality and deal with multicollinearity among
          the variables. After PCA, the weighted average of the component scores
          are computed as the environmental score.
        </p>
        <p>
          Note that indicators which are harmful for environment (like high
          ozone or PM2.5 levels, or extreme temperatures) are multiplied by -1
          before analysis so that they decrease, not increase, the environmental
          score.
        </p>
      </div>
    </>
  );
}