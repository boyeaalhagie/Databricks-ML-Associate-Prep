export interface Question {
  id: number;
  section: string;
  question: string;
  options: string[];
  answer: string; // e.g. "A", "B", "C", "D"
  explanation: string;
}

export const questions: Question[] = [
  // ─── SECTION 1: DATABRICKS MACHINE LEARNING ──────────────────────────────
  {
    id: 1,
    section: "Databricks Machine Learning",
    question:
      "A data scientist wants to create a feature table in a workspace with Unity Catalog enabled. What is the correct way of creating this feature table?",
    options: [
      "A. Create a Delta table with data in it, then use register_table() from FeatureStoreClient to register it.",
      "B. Create an empty Delta table with the AS FEATURE STORE clause via SQL, then write data to it.",
      "C. Use the create_table() method of FeatureEngineeringClient in Python to create the table, then write data to it.",
      "D. Create a Delta table in Unity Catalog then use ALTER TABLE … SET AS FEATURE STORE in SQL.",
    ],
    answer: "C",
    explanation:
      "FeatureEngineeringClient (from databricks.feature_engineering) is the correct client for Unity Catalog feature tables. Its create_table() method creates and registers the table in one step.",
  },
  {
    id: 2,
    section: "Data Processing",
    question:
      "A data scientist needs to impute missing values in a continuous feature with the least effort but correct results. Which strategy will do this?",
    options: [
      "A. Use sklearn SimpleImputer, which automatically selects the best methodology based on the feature distribution.",
      "B. Examine the distribution of the values and select the appropriate imputation upon review.",
      "C. Use .mean(), which is the most appropriate imputation on continuous columns.",
      "D. Use .mode(), which is the most appropriate imputation on continuous columns.",
    ],
    answer: "B",
    explanation:
      "There is no single universal best strategy. The correct approach is to examine the distribution first: use mean for symmetric distributions and median for skewed or outlier-heavy distributions.",
  },
  {
    id: 3,
    section: "Model Development",
    question:
      "A dataset for a churn model is highly imbalanced (10% churn). Which strategy directly mitigates the model bias towards the non-churn class?",
    options: [
      "A. Normalize the features to ensure they are on the same scale.",
      "B. Use cost-sensitive learning by assigning a higher misclassification cost to the minority class.",
      "C. Increase the training dataset by collecting more data on non-churn customers.",
      "D. Use a simpler model to reduce overfitting.",
    ],
    answer: "B",
    explanation:
      "Cost-sensitive learning directly penalizes misclassifying the minority class, forcing the model to pay more attention to it without changing the data distribution.",
  },
  {
    id: 4,
    section: "Model Development",
    question:
      "A data scientist tunes an SVM with 5-fold CV and GridSearchCV. The param grid has C=[0.1,1,10], kernel=['linear','rbf'], gamma=[0.01,0.1,1]. How many models are trained in total?",
    options: ["A. 90", "B. 18", "C. 1", "D. None of the above."],
    answer: "A",
    explanation:
      "3 × 2 × 3 = 18 hyperparameter combinations. Each is evaluated with 5-fold CV. 18 × 5 = 90 total models trained.",
  },
  {
    id: 5,
    section: "Model Deployment",
    question:
      "A podcast platform must run anomaly detection on tens of thousands of events per second with auto-scaling compute. Which pipeline design meets these requirements?",
    options: [
      "A. Create a Delta Live Tables pipeline that applies the algorithm as a Spark UDF.",
      "B. Create a Structured Streaming Job that applies the algorithm as a Spark UDF.",
      "C. Create a model serving endpoint, then a Delta Live Tables pipeline that calls a custom UDF invoking the endpoint.",
      "D. Create a model serving endpoint, then a Structured Streaming job that calls a custom UDF invoking the endpoint.",
    ],
    answer: "A",
    explanation:
      "DLT pipelines apply the model as a Spark UDF directly in the streaming pipeline and support automatic compute scaling, satisfying both the throughput and dynamic scaling requirements.",
  },
  {
    id: 6,
    section: "Databricks Machine Learning",
    question: "Which of the following best describes an MLOps best practice?",
    options: [
      "A. Train models locally and manually deploy to production.",
      "B. Use version control for code and track all experiments with MLflow.",
      "C. Share credentials across all team members for simplicity.",
      "D. Avoid logging model metrics to save storage costs.",
    ],
    answer: "B",
    explanation:
      "Core MLOps principles include version-controlled code, reproducible experiment tracking (MLflow), and automated pipelines to ensure reliability and auditability.",
  },
  {
    id: 7,
    section: "Databricks Machine Learning",
    question:
      "What is a key advantage of the Databricks ML Runtime over the standard runtime?",
    options: [
      "A. It pre-installs ML libraries like TensorFlow, PyTorch, and scikit-learn.",
      "B. It provides faster CPU clock speeds.",
      "C. It allows connecting to external databases not supported by standard runtime.",
      "D. It disables Unity Catalog for lower-latency ML operations.",
    ],
    answer: "A",
    explanation:
      "The ML Runtime ships with popular ML frameworks and optimized GPU drivers pre-installed, eliminating setup time and ensuring version compatibility.",
  },
  {
    id: 8,
    section: "Databricks Machine Learning",
    question:
      "What does Databricks AutoML produce after a completed run?",
    options: [
      "A. A trained model deployed to a REST endpoint with no further action needed.",
      "B. A set of Python notebooks with the best model training code plus MLflow runs for all trials.",
      "C. A SQL query to recreate the best feature set.",
      "D. A Delta table with engineered features ready for reuse.",
    ],
    answer: "B",
    explanation:
      "AutoML generates an exploration notebook, trial notebooks for each algorithm, and MLflow runs—giving full transparency and a starting point for further tuning.",
  },
  {
    id: 9,
    section: "Databricks Machine Learning",
    question:
      "What problem types does Databricks AutoML support?",
    options: [
      "A. Classification, regression, and forecasting.",
      "B. Classification and regression only.",
      "C. Regression and clustering.",
      "D. All supervised and unsupervised learning tasks.",
    ],
    answer: "A",
    explanation:
      "As of the current exam guide, AutoML supports binary/multi-class classification, regression, and time-series forecasting.",
  },
  {
    id: 10,
    section: "Databricks Machine Learning",
    question:
      "What is the primary benefit of creating feature tables at the account level in Unity Catalog versus at the workspace level?",
    options: [
      "A. Unity Catalog feature tables are faster to read for batch inference.",
      "B. Unity Catalog feature tables can be shared and governed across multiple workspaces.",
      "C. Workspace-level feature tables require more storage.",
      "D. Unity Catalog does not support online feature tables.",
    ],
    answer: "B",
    explanation:
      "Unity Catalog provides cross-workspace discoverability and fine-grained access control, making features reusable across teams and workspaces.",
  },
  {
    id: 11,
    section: "Databricks Machine Learning",
    question:
      "How do you write new data to an existing feature store table using FeatureEngineeringClient?",
    options: [
      "A. fe.write_table(name='catalog.schema.table', df=df)",
      "B. fe.create_table(name='catalog.schema.table', df=df)",
      "C. spark.sql('INSERT INTO feature_table SELECT * FROM df')",
      "D. fe.log_table(name='catalog.schema.table', df=df)",
    ],
    answer: "A",
    explanation:
      "FeatureEngineeringClient.write_table() is used to write (merge) new records into an existing feature table.",
  },
  {
    id: 12,
    section: "Databricks Machine Learning",
    question:
      "When building a training set from the Feature Store, which object specifies which features to retrieve and how to join them?",
    options: [
      "A. FeatureLookup objects passed to fe.create_training_set()",
      "B. SQL JOIN statements written in the training notebook",
      "C. A YAML config file referencing feature table names",
      "D. The get_table() method of FeatureStoreClient",
    ],
    answer: "A",
    explanation:
      "FeatureLookup defines the feature table, the feature names, and the join key. It is passed to create_training_set() to produce the training DataFrame.",
  },
  {
    id: 13,
    section: "Databricks Machine Learning",
    question:
      "What is automatically handled when you score a model that was logged with Feature Store metadata at inference time?",
    options: [
      "A. Model hyperparameter optimization.",
      "B. Feature retrieval and joining to the scoring DataFrame using stored lineage.",
      "C. Model deployment to a serving endpoint.",
      "D. Data preprocessing and normalization steps.",
    ],
    answer: "B",
    explanation:
      "Because feature lineage is stored in the model, FeatureEngineeringClient.score_batch() automatically looks up and joins the required features at inference time.",
  },
  {
    id: 14,
    section: "Databricks Machine Learning",
    question:
      "What is the key difference between online and offline feature tables?",
    options: [
      "A. Online tables support batch reads only; offline tables support real-time reads.",
      "B. Online tables are optimized for low-latency real-time lookups; offline tables are for batch processing.",
      "C. Online tables are stored in S3; offline tables are in Delta Lake.",
      "D. Online tables are read-only; offline tables support writes.",
    ],
    answer: "B",
    explanation:
      "Online tables serve features with millisecond latency for real-time model serving. Offline tables are Delta tables used for batch training and inference.",
  },
  {
    id: 15,
    section: "Databricks Machine Learning",
    question:
      "How do you identify the best run from an MLflow experiment using the MLflow Client API?",
    options: [
      "A. mlflow.get_best_run(experiment_id)",
      "B. MlflowClient().search_runs() with order_by on a metric, then take the first result.",
      "C. mlflow.best_run(metric='accuracy')",
      "D. MlflowClient().get_experiment_by_name().best_run_id",
    ],
    answer: "B",
    explanation:
      "MlflowClient().search_runs(experiment_ids=[...], order_by=['metrics.val_accuracy DESC'], max_results=1) returns the best run by the specified metric.",
  },
  {
    id: 16,
    section: "Databricks Machine Learning",
    question:
      "Which MLflow function logs a scalar numeric metric during a run?",
    options: [
      "A. mlflow.log_param('accuracy', 0.95)",
      "B. mlflow.log_artifact('accuracy', 0.95)",
      "C. mlflow.log_metric('accuracy', 0.95)",
      "D. mlflow.record_metric('accuracy', 0.95)",
    ],
    answer: "C",
    explanation:
      "mlflow.log_metric(key, value) records a scalar metric. log_param() is for hyperparameters, log_artifact() is for files.",
  },
  {
    id: 17,
    section: "Databricks Machine Learning",
    question:
      "How do you log a local file or directory as an artifact in an MLflow run?",
    options: [
      "A. mlflow.log_metric('model.pkl', path)",
      "B. mlflow.log_artifact('model.pkl')",
      "C. mlflow.save_artifact(path='model.pkl')",
      "D. mlflow.upload_file('model.pkl')",
    ],
    answer: "B",
    explanation:
      "mlflow.log_artifact(local_path) copies the local file into the artifact store for the current active run.",
  },
  {
    id: 18,
    section: "Databricks Machine Learning",
    question:
      "Which of the following is NOT directly available in the MLflow Tracking UI?",
    options: [
      "A. Run parameters and metrics across experiments.",
      "B. Logged model artifacts and their download links.",
      "C. The notebook or source file that triggered each run.",
      "D. Live cluster CPU utilization graphs during training.",
    ],
    answer: "D",
    explanation:
      "The MLflow UI shows params, metrics, artifacts, and run metadata. Real-time cluster resource monitoring is found in Databricks cluster UI, not MLflow.",
  },
  {
    id: 19,
    section: "Databricks Machine Learning",
    question:
      "How do you register a model to Unity Catalog using the MLflow Python API?",
    options: [
      "A. mlflow.register_model(model_uri, 'models:/catalog.schema.model_name')",
      "B. mlflow.register_model(model_uri, 'catalog.schema.model_name')",
      "C. MlflowClient().create_registered_model('catalog.schema.model_name')",
      "D. mlflow.log_model(model, 'catalog.schema.model_name')",
    ],
    answer: "B",
    explanation:
      "For Unity Catalog, pass the three-level name (catalog.schema.model_name) as the second argument to mlflow.register_model().",
  },
  {
    id: 20,
    section: "Databricks Machine Learning",
    question:
      "What is a key benefit of registering models in Unity Catalog over the workspace registry?",
    options: [
      "A. Unity Catalog models support more ML frameworks than the workspace registry.",
      "B. Unity Catalog provides fine-grained access control (ACLs) and cross-workspace sharing.",
      "C. Unity Catalog automatically retrains models on a schedule.",
      "D. Unity Catalog registry loads models with lower latency.",
    ],
    answer: "B",
    explanation:
      "Unity Catalog centralizes governance across workspaces with column-level, table-level, and model-level ACLs, plus data lineage tracking.",
  },
  {
    id: 21,
    section: "Databricks Machine Learning",
    question:
      "In which scenario is promoting CODE preferred over promoting a trained MODEL artifact?",
    options: [
      "A. When the model file is too large to transfer between environments.",
      "B. When data distributions differ significantly between environments and the model should be retrained on each environment's data.",
      "C. When the model was produced by AutoML.",
      "D. When the model is registered in Unity Catalog.",
    ],
    answer: "B",
    explanation:
      "If production data differs from staging data, promoting the training code and retraining ensures the model reflects the real distribution instead of a stale artifact.",
  },
  {
    id: 22,
    section: "Databricks Machine Learning",
    question:
      "How do you set a tag on a registered model version in MLflow?",
    options: [
      "A. MlflowClient().set_model_version_tag(name, version, key, value)",
      "B. mlflow.set_tag(model_name, key, value)",
      "C. mlflow.register_model_tag(model_name, {key: value})",
      "D. MlflowClient().log_model_tag(model_name, key, value)",
    ],
    answer: "A",
    explanation:
      "MlflowClient().set_model_version_tag() adds a searchable key-value tag to a specific registered model version.",
  },
  {
    id: 23,
    section: "Databricks Machine Learning",
    question:
      "How do you promote a challenger model to champion using Unity Catalog model aliases?",
    options: [
      "A. MlflowClient().rename_model_version(name, version, 'champion')",
      "B. MlflowClient().set_registered_model_alias(name, 'champion', version)",
      "C. mlflow.promote_model(name, version, alias='champion')",
      "D. MlflowClient().transition_model_version_stage(name, version, 'Production')",
    ],
    answer: "B",
    explanation:
      "In Unity Catalog, lifecycle stages are replaced by aliases. set_registered_model_alias() points the 'champion' alias to the desired version.",
  },
  {
    id: 24,
    section: "Databricks Machine Learning",
    question:
      "What does calling mlflow.autolog() before training do?",
    options: [
      "A. Automatically deploys the trained model to a serving endpoint.",
      "B. Automatically logs params, metrics, and models for supported frameworks without explicit log calls.",
      "C. Automatically selects the best hyperparameters.",
      "D. Automatically creates a new experiment for each notebook cell.",
    ],
    answer: "B",
    explanation:
      "mlflow.autolog() enables framework-specific autologging (sklearn, XGBoost, PyTorch, etc.) that captures all relevant training information with zero extra code.",
  },
  {
    id: 25,
    section: "Databricks Machine Learning",
    question:
      "What is the correct Python syntax to start an MLflow run as a context manager?",
    options: [
      "A. mlflow.start()",
      "B. with mlflow.start_run():",
      "C. mlflow.init_run()",
      "D. MLflowRun().start()",
    ],
    answer: "B",
    explanation:
      "The context manager pattern (with mlflow.start_run():) ensures the run is properly ended even if an exception occurs.",
  },
  {
    id: 26,
    section: "Databricks Machine Learning",
    question:
      "Which MLflow model flavor allows wrapping any Python model with a uniform predict() interface?",
    options: [
      "A. mlflow.sklearn",
      "B. mlflow.pytorch",
      "C. mlflow.pyfunc",
      "D. mlflow.spark",
    ],
    answer: "C",
    explanation:
      "mlflow.pyfunc provides a generic Python function wrapper that supports any framework, enabling custom pre/post-processing and framework-agnostic serving.",
  },
  {
    id: 27,
    section: "Databricks Machine Learning",
    question: "What is the purpose of an MLflow model signature?",
    options: [
      "A. To authenticate who trained the model.",
      "B. To define the expected input and output schema for validation during serving.",
      "C. To specify the compute resources needed for the serving endpoint.",
      "D. To link the model artifact to its training dataset.",
    ],
    answer: "B",
    explanation:
      "Model signatures define column names, types, and shapes for inputs and outputs, enabling schema enforcement and documentation at serving time.",
  },
  {
    id: 28,
    section: "Databricks Machine Learning",
    question:
      "In Unity Catalog's model registry, how is the model lifecycle (champion, challenger, etc.) managed?",
    options: [
      "A. Through stages: None, Staging, Production, Archived.",
      "B. Through human-readable aliases mapped to specific version numbers.",
      "C. Through model version numbers only.",
      "D. Through MLflow run tags on the parent training run.",
    ],
    answer: "B",
    explanation:
      "Unity Catalog replaced the legacy stage system with flexible aliases (e.g., 'champion', 'challenger') that point to any version and can be updated without deprecation.",
  },
  {
    id: 29,
    section: "Databricks Machine Learning",
    question:
      "What is the correct FeatureEngineeringClient class to use in a Unity Catalog workspace?",
    options: [
      "A. FeatureStoreClient from databricks.feature_store",
      "B. FeatureEngineeringClient from databricks.feature_engineering",
      "C. UnityFeatureClient from databricks.unity_catalog",
      "D. MLflowFeatureClient from mlflow.features",
    ],
    answer: "B",
    explanation:
      "FeatureEngineeringClient is the modern client that supports Unity Catalog. FeatureStoreClient is the legacy workspace-level client.",
  },
  {
    id: 30,
    section: "Databricks Machine Learning",
    question:
      "A data scientist wants to load a champion model from Unity Catalog. Which URI format is correct?",
    options: [
      "A. models:/catalog.schema.model_name@champion",
      "B. uc://catalog/schema/model_name/champion",
      "C. unity_catalog://model_name/champion",
      "D. runs:/run_id/model_name",
    ],
    answer: "A",
    explanation:
      "For Unity Catalog models, the URI format is models:/<catalog>.<schema>.<model_name>@<alias> or models:/<catalog>.<schema>.<model_name>/<version_number>.",
  },

  // ─── SECTION 2: DATA PROCESSING ─────────────────────────────────────────
  {
    id: 31,
    section: "Data Processing",
    question:
      "What is the difference between df.describe() and df.summary() on a Spark DataFrame?",
    options: [
      "A. describe() includes quartile percentiles; summary() does not.",
      "B. summary() includes percentile statistics (25%, 50%, 75%); describe() does not.",
      "C. They produce identical output.",
      "D. describe() only works on string columns; summary() only on numeric columns.",
    ],
    answer: "B",
    explanation:
      "df.summary() adds 25%, 50%, 75% percentiles to the basic statistics provided by df.describe() (count, mean, stddev, min, max).",
  },
  {
    id: 32,
    section: "Data Processing",
    question:
      "What does dbutils.data.summarize() provide in Databricks?",
    options: [
      "A. Writes a statistical summary to a Delta table.",
      "B. Displays comprehensive statistics and distribution visualizations for a DataFrame inline in a notebook.",
      "C. Profiles cluster memory usage.",
      "D. Summarizes recent MLflow experiment results.",
    ],
    answer: "B",
    explanation:
      "dbutils.data.summarize(df) renders an interactive widget with column-level statistics and histograms directly in the Databricks notebook.",
  },
  {
    id: 33,
    section: "Data Processing",
    question:
      "Using the IQR method, which values should be treated as outliers?",
    options: [
      "A. Values more than 2 standard deviations from the mean.",
      "B. Values below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR.",
      "C. Values outside the 1st and 99th percentile.",
      "D. Values that differ from the median by more than the IQR.",
    ],
    answer: "B",
    explanation:
      "The standard Tukey fence formula flags values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR as outliers.",
  },
  {
    id: 34,
    section: "Data Processing",
    question:
      "Using the standard deviation method, which records are typically flagged as outliers?",
    options: [
      "A. Values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR.",
      "B. Values more than N standard deviations (typically 2 or 3) from the mean.",
      "C. Values outside the 5th and 95th percentile.",
      "D. Values with a z-score less than zero.",
    ],
    answer: "B",
    explanation:
      "Z-score outlier detection flags records with |z| > 2 or |z| > 3 depending on the tolerance level chosen.",
  },
  {
    id: 35,
    section: "Data Processing",
    question:
      "Which visualization is most appropriate for displaying the distribution of a single continuous feature?",
    options: [
      "A. Bar chart showing category counts.",
      "B. Scatter plot of two variables.",
      "C. Histogram or KDE (kernel density estimate) plot.",
      "D. Pie chart showing proportions.",
    ],
    answer: "C",
    explanation:
      "Histograms and KDE plots show the shape, spread, skew, and modality of a continuous distribution.",
  },
  {
    id: 36,
    section: "Data Processing",
    question:
      "Which visualization is most appropriate for a categorical feature?",
    options: [
      "A. Histogram of raw values.",
      "B. Bar chart showing value counts or frequencies.",
      "C. Box plot.",
      "D. Line chart over time.",
    ],
    answer: "B",
    explanation:
      "A bar chart of value counts clearly shows the frequency and relative proportion of each category.",
  },
  {
    id: 37,
    section: "Data Processing",
    question:
      "What is the most appropriate method to compare two continuous features?",
    options: [
      "A. Chi-squared test and bar charts.",
      "B. Scatter plot and Pearson/Spearman correlation coefficient.",
      "C. Crosstab and heatmap.",
      "D. Side-by-side bar charts.",
    ],
    answer: "B",
    explanation:
      "A scatter plot reveals the relationship visually, while correlation coefficients quantify the linear (Pearson) or rank-based (Spearman) association.",
  },
  {
    id: 38,
    section: "Data Processing",
    question:
      "What is the most appropriate method to compare two categorical features?",
    options: [
      "A. Pearson correlation coefficient.",
      "B. Scatter plot.",
      "C. Chi-squared test with a crosstab or heatmap.",
      "D. Student t-test.",
    ],
    answer: "C",
    explanation:
      "The chi-squared test of independence measures whether two categorical variables are associated; a crosstab or heatmap visualizes the joint frequency distribution.",
  },
  {
    id: 39,
    section: "Data Processing",
    question:
      "When is median imputation preferred over mean imputation for a continuous feature?",
    options: [
      "A. When the feature follows a perfect normal distribution.",
      "B. When the feature is skewed or contains significant outliers.",
      "C. When the feature is categorical.",
      "D. When more than 50% of values are missing.",
    ],
    answer: "B",
    explanation:
      "The median is robust to outliers; the mean is pulled toward extreme values. For skewed distributions, median better represents the typical value.",
  },
  {
    id: 40,
    section: "Data Processing",
    question:
      "For which type of feature is mode imputation most appropriate?",
    options: [
      "A. Continuous numeric features with few outliers.",
      "B. Categorical (nominal or ordinal) features.",
      "C. Highly skewed numeric features.",
      "D. Time-series features.",
    ],
    answer: "B",
    explanation:
      "Mode imputation replaces missing values with the most frequent category, which is meaningful for categorical features but not for continuous ones.",
  },
  {
    id: 41,
    section: "Data Processing",
    question:
      "One-hot encoding is LEAST appropriate in which scenario?",
    options: [
      "A. A nominal categorical feature with 4 distinct values in a logistic regression model.",
      "B. A tree-based model with a categorical feature that has 200 distinct values.",
      "C. A linear SVM with a low-cardinality categorical feature.",
      "D. A feature representing color with values: red, green, blue.",
    ],
    answer: "B",
    explanation:
      "High-cardinality OHE creates hundreds of sparse columns and is memory-intensive. Tree models can use ordinal or target encoding more efficiently for high-cardinality features.",
  },
  {
    id: 42,
    section: "Data Processing",
    question:
      "When is a log scale transformation appropriate for a feature?",
    options: [
      "A. When the feature is normally distributed with no skew.",
      "B. When the feature is right-skewed with a wide range of positive values.",
      "C. When the feature contains negative values.",
      "D. When the feature is binary (0/1).",
    ],
    answer: "B",
    explanation:
      "Log transforms compress large values and expand small ones, making right-skewed distributions (e.g., income, house prices) more approximately normal.",
  },
  {
    id: 43,
    section: "Data Processing",
    question:
      "What is the purpose of feature scaling (normalization/standardization)?",
    options: [
      "A. It removes outliers from the dataset automatically.",
      "B. It ensures features are on a comparable scale so distance-based or gradient-based models are not dominated by large-magnitude features.",
      "C. It converts categorical features into numeric values.",
      "D. It reduces the number of features in the dataset.",
    ],
    answer: "B",
    explanation:
      "Algorithms like KNN, SVM, and gradient descent-based models are sensitive to feature magnitude. Scaling prevents large-scale features from dominating the learning process.",
  },
  {
    id: 44,
    section: "Data Processing",
    question:
      "A regression target variable has a highly right-skewed distribution. After log-transforming it and training, what must you do with model predictions before evaluating RMSE on the original scale?",
    options: [
      "A. Multiply predictions by the log base.",
      "B. Exponentiate the predictions to reverse the log transform.",
      "C. Square the predictions.",
      "D. Divide predictions by the standard deviation of the log-transformed target.",
    ],
    answer: "B",
    explanation:
      "Predictions are in log-space. Applying exp() (or expm1() if log1p() was used) brings them back to the original scale before comparing to original target values.",
  },
  {
    id: 45,
    section: "Data Processing",
    question:
      "Which Spark operation is used to remove rows where a column value exceeds the IQR-based outlier threshold?",
    options: [
      "A. df.dropna(subset=['col'])",
      "B. df.filter((df.col >= lower_bound) & (df.col <= upper_bound))",
      "C. df.fillna(median, subset=['col'])",
      "D. df.distinct()",
    ],
    answer: "B",
    explanation:
      "df.filter() with the computed lower/upper IQR bounds keeps only rows within the acceptable range.",
  },
  {
    id: 46,
    section: "Data Processing",
    question:
      "In a machine learning context, what is data leakage?",
    options: [
      "A. When model weights are accidentally exposed to users.",
      "B. When information from the test set or future data influences model training, producing overly optimistic performance estimates.",
      "C. When training data is stored in an unsecured Delta table.",
      "D. When model predictions are stored in the wrong table.",
    ],
    answer: "B",
    explanation:
      "Data leakage causes models to 'cheat' by seeing future or test information during training, making performance estimates unreliable in production.",
  },
  {
    id: 47,
    section: "Data Processing",
    question:
      "What is stratified sampling and when is it used in train-test splitting?",
    options: [
      "A. Random sampling; used when the dataset is large.",
      "B. Sampling that preserves the class distribution of the target variable; used especially with imbalanced datasets.",
      "C. Sampling based on a time-ordered sequence.",
      "D. Sampling that selects only rows with no missing values.",
    ],
    answer: "B",
    explanation:
      "Stratified splits ensure each split has the same proportion of each class as the original dataset, critical when classes are rare.",
  },
  {
    id: 48,
    section: "Data Processing",
    question:
      "Which sklearn class is used to impute missing values with the mean, median, or most frequent value?",
    options: [
      "A. sklearn.preprocessing.Imputer",
      "B. sklearn.impute.SimpleImputer",
      "C. sklearn.preprocessing.FillNaN",
      "D. sklearn.feature_selection.MissingHandler",
    ],
    answer: "B",
    explanation:
      "SimpleImputer with strategy='mean', 'median', or 'most_frequent' handles the three standard imputation strategies.",
  },
  {
    id: 49,
    section: "Data Processing",
    question:
      "Which sklearn class applies one-hot encoding to categorical features?",
    options: [
      "A. sklearn.preprocessing.LabelEncoder",
      "B. sklearn.preprocessing.OneHotEncoder",
      "C. sklearn.feature_extraction.DictVectorizer",
      "D. sklearn.preprocessing.OrdinalEncoder",
    ],
    answer: "B",
    explanation:
      "OneHotEncoder creates binary indicator columns for each category. LabelEncoder produces ordinal integers, which implies an ordering not present in nominal features.",
  },
  {
    id: 50,
    section: "Data Processing",
    question:
      "What is the main risk of using LabelEncoder for a nominal categorical feature in a linear model?",
    options: [
      "A. It creates too many columns.",
      "B. It implies a false ordinal relationship between categories that can mislead the model.",
      "C. It does not handle missing values.",
      "D. It is incompatible with sklearn Pipelines.",
    ],
    answer: "B",
    explanation:
      "LabelEncoder assigns integers (0, 1, 2, …) which linear models interpret as ordered distances. This is incorrect for nominal features like 'city' or 'color'.",
  },

  // ─── SECTION 3: MODEL DEVELOPMENT ───────────────────────────────────────
  {
    id: 51,
    section: "Model Development",
    question:
      "In sklearn, what distinguishes a Transformer from an Estimator?",
    options: [
      "A. A Transformer has fit() and predict(); an Estimator has fit() and transform().",
      "B. A Transformer has fit() and transform(); an Estimator has fit() and predict().",
      "C. They are the same; both have fit(), transform(), and predict().",
      "D. A Transformer is for deep learning; an Estimator is for classical ML.",
    ],
    answer: "B",
    explanation:
      "Transformers modify features (e.g., Scaler, Encoder). Estimators learn from data and make predictions (e.g., LogisticRegression, RandomForest).",
  },
  {
    id: 52,
    section: "Model Development",
    question:
      "What is the purpose of an sklearn Pipeline?",
    options: [
      "A. To run distributed training across a Spark cluster.",
      "B. To chain preprocessing transformers and a final estimator into one reusable object with a single fit/predict interface.",
      "C. To parallelize multiple independent training runs.",
      "D. To connect to external data sources.",
    ],
    answer: "B",
    explanation:
      "A Pipeline applies each transformer's transform() sequentially during predict/transform and calls only the last step's predict(), preventing data leakage from fitting scalers on test data.",
  },
  {
    id: 53,
    section: "Model Development",
    question:
      "What does Hyperopt's fmin() function do?",
    options: [
      "A. Minimizes a user-defined objective function over a specified hyperparameter search space.",
      "B. Finds the minimum value in a dataset.",
      "C. Filters MLflow runs by the minimum metric value.",
      "D. Parallelizes model training across Spark workers.",
    ],
    answer: "A",
    explanation:
      "fmin(fn=objective, space=search_space, algo=tpe.suggest, max_evals=N) iteratively calls the objective function with suggested hyperparameters to minimize the returned loss.",
  },
  {
    id: 54,
    section: "Model Development",
    question:
      "What is the role of SparkTrials in Hyperopt?",
    options: [
      "A. To store trial results in a Spark Delta table.",
      "B. To distribute hyperparameter tuning trials across Spark worker nodes in parallel.",
      "C. To use Spark SQL for managing trial history.",
      "D. To connect Hyperopt with Delta Live Tables.",
    ],
    answer: "B",
    explanation:
      "SparkTrials allows Hyperopt to run each trial on a different Spark executor, dramatically speeding up tuning of single-node models.",
  },
  {
    id: 55,
    section: "Model Development",
    question:
      "What is the advantage of Bayesian hyperparameter search (TPE in Hyperopt) over random search?",
    options: [
      "A. It always finds the global optimum given enough time.",
      "B. It builds a probabilistic model of the loss function and focuses subsequent trials on promising regions of the search space.",
      "C. It is the only search method that supports parallelism.",
      "D. It requires less memory than grid or random search.",
    ],
    answer: "B",
    explanation:
      "TPE (Tree of Parzen Estimators) uses a surrogate model to intelligently select the next hyperparameter set, converging faster than blind random or exhaustive grid search.",
  },
  {
    id: 56,
    section: "Model Development",
    question:
      "What is the main downside of cross-validation compared to a single train-validation split?",
    options: [
      "A. Cross-validation produces biased performance estimates.",
      "B. Cross-validation requires training the model k times, making it significantly more computationally expensive.",
      "C. Cross-validation cannot be used inside an sklearn Pipeline.",
      "D. Cross-validation requires datasets larger than 1 million rows.",
    ],
    answer: "B",
    explanation:
      "k-fold CV trains k models instead of one, multiplying the compute cost by k. For large models or datasets this can be prohibitive.",
  },
  {
    id: 57,
    section: "Model Development",
    question:
      "What is the key benefit of cross-validation over a single train-validation split?",
    options: [
      "A. It requires less training data.",
      "B. It provides a more reliable, lower-variance estimate of generalization performance by using all data for both training and validation across folds.",
      "C. It is faster to compute than a single split.",
      "D. It eliminates the need for a hold-out test set.",
    ],
    answer: "B",
    explanation:
      "Every sample gets to be in the validation set exactly once, yielding a performance estimate that is less dependent on a single lucky or unlucky data split.",
  },
  {
    id: 58,
    section: "Model Development",
    question:
      "When is the F1 score more informative than accuracy?",
    options: [
      "A. When the dataset is perfectly balanced.",
      "B. When the dataset is imbalanced and both precision and recall matter equally.",
      "C. When the model outputs continuous probabilities.",
      "D. When the target variable is continuous.",
    ],
    answer: "B",
    explanation:
      "On imbalanced datasets a model can reach high accuracy by predicting the majority class. F1 balances precision and recall, reflecting performance on the minority class.",
  },
  {
    id: 59,
    section: "Model Development",
    question: "What does AUC-ROC measure?",
    options: [
      "A. The average precision at each decision threshold.",
      "B. The model ability to discriminate between positive and negative classes across all classification thresholds.",
      "C. The accuracy of the model at a fixed 0.5 threshold.",
      "D. The training set performance curve over epochs.",
    ],
    answer: "B",
    explanation:
      "AUC-ROC (Area Under the Receiver Operating Characteristic Curve) summarizes the tradeoff between true positive rate and false positive rate across all thresholds.",
  },
  {
    id: 60,
    section: "Model Development",
    question:
      "Which regression metric is most sensitive to large individual errors (outliers)?",
    options: [
      "A. MAE (Mean Absolute Error)",
      "B. R-squared",
      "C. RMSE (Root Mean Squared Error)",
      "D. MAPE (Mean Absolute Percentage Error)",
    ],
    answer: "C",
    explanation:
      "RMSE squares each error before averaging, so large errors are penalized disproportionately compared to MAE which treats all errors linearly.",
  },
  {
    id: 61,
    section: "Model Development",
    question: "What does R-squared (coefficient of determination) represent?",
    options: [
      "A. The Pearson correlation between predicted and actual values.",
      "B. The proportion of variance in the target variable explained by the model.",
      "C. The normalized mean squared error in the range [0, 1].",
      "D. The average percentage accuracy across all predictions.",
    ],
    answer: "B",
    explanation:
      "R² = 1 - SS_res/SS_tot. A value of 0.8 means the model explains 80% of the variance in the target. R² can be negative for very poor models.",
  },
  {
    id: 62,
    section: "Model Development",
    question:
      "When should you prefer MAE over RMSE as a regression evaluation metric?",
    options: [
      "A. When you want to heavily penalize large prediction errors.",
      "B. When outliers exist and you want a metric that is more robust to large individual errors.",
      "C. When the target variable has been log-transformed.",
      "D. When the target variable is binary.",
    ],
    answer: "B",
    explanation:
      "MAE uses absolute errors rather than squared errors, so a single large outlier has less influence on the overall metric value.",
  },
  {
    id: 63,
    section: "Model Development",
    question:
      "What does high bias (underfitting) indicate about a model?",
    options: [
      "A. The model is too complex and memorizes the training data.",
      "B. The model is too simple and fails to capture underlying patterns in the data.",
      "C. The model has too many features relative to the training examples.",
      "D. The model was trained for too many epochs.",
    ],
    answer: "B",
    explanation:
      "High bias models have low training AND test accuracy. The fix is to increase model complexity, add features, or reduce regularization.",
  },
  {
    id: 64,
    section: "Model Development",
    question:
      "What does high variance (overfitting) indicate about a model?",
    options: [
      "A. The model is too simple and underfits the training data.",
      "B. The model performs well on training data but poorly on unseen validation/test data.",
      "C. The model was trained with too little regularization and too few epochs.",
      "D. The model does not have enough features.",
    ],
    answer: "B",
    explanation:
      "High variance means the model has memorized training noise. The fix is regularization, reducing model complexity, or using more training data.",
  },
  {
    id: 65,
    section: "Model Development",
    question:
      "Which of the following techniques directly mitigates overfitting?",
    options: [
      "A. Adding more polynomial features.",
      "B. Increasing the depth of a decision tree.",
      "C. L1 or L2 regularization, early stopping, or dropout.",
      "D. Training for more iterations.",
    ],
    answer: "C",
    explanation:
      "Regularization adds a penalty for model complexity, early stopping halts training before overfitting begins, and dropout randomly disables neurons during training.",
  },
  {
    id: 66,
    section: "Model Development",
    question:
      "In SparkML, which class performs k-fold cross-validation for hyperparameter tuning?",
    options: [
      "A. pyspark.ml.tuning.CrossValidator",
      "B. sklearn.model_selection.KFold",
      "C. pyspark.ml.evaluation.CrossValidator",
      "D. spark.ml.CrossValidation",
    ],
    answer: "A",
    explanation:
      "pyspark.ml.tuning.CrossValidator wraps a SparkML estimator, evaluator, and ParamGrid and trains models for each fold-parameter combination in parallel.",
  },
  {
    id: 67,
    section: "Model Development",
    question:
      "How does Random Forest reduce variance compared to a single decision tree?",
    options: [
      "A. Random Forest has higher variance than a single tree by using more parameters.",
      "B. Random Forest averages predictions from many trees trained on random feature/row subsets, reducing variance through ensemble aggregation.",
      "C. Random Forest trains a single deep tree more carefully than a standard decision tree.",
      "D. Random Forest removes outliers before training.",
    ],
    answer: "B",
    explanation:
      "Bagging (bootstrap aggregation) with random feature selection creates diverse trees whose averaged predictions have much lower variance than any single tree.",
  },
  {
    id: 68,
    section: "Model Development",
    question:
      "How does Gradient Boosting differ from Random Forest in how trees are trained?",
    options: [
      "A. Both train trees independently; GB uses bagging, RF uses boosting.",
      "B. RF trains trees independently in parallel; GB trains trees sequentially, each correcting residual errors of the previous.",
      "C. GB uses random feature subsets; RF uses all features for each tree.",
      "D. They are identical except for the number of trees used.",
    ],
    answer: "B",
    explanation:
      "Boosting is a sequential process: each new tree fits the residuals or gradient of the combined model, progressively reducing bias.",
  },
  {
    id: 69,
    section: "Model Development",
    question:
      "How do you parallelize single-node sklearn model training across a Spark cluster for hyperparameter tuning?",
    options: [
      "A. Pass spark_df directly to model.fit().",
      "B. Use SparkTrials with Hyperopt so each trial runs on a separate Spark executor.",
      "C. Wrap the model in a pyspark.ml.Pipeline.",
      "D. Call spark.distribute(model.fit, params).",
    ],
    answer: "B",
    explanation:
      "SparkTrials dispatches each Hyperopt trial to a different Spark executor as an independent task, enabling Spark-level parallelism for single-node models.",
  },
  {
    id: 70,
    section: "Model Development",
    question:
      "What is SHAP (SHapley Additive exPlanations) used for in ML?",
    options: [
      "A. Speeding up model training through hardware optimization.",
      "B. Computing local and global feature importance by quantifying each feature contribution to individual predictions.",
      "C. Reducing model file size for faster deployment.",
      "D. Performing automated feature selection before training.",
    ],
    answer: "B",
    explanation:
      "SHAP uses game-theory Shapley values to fairly distribute the prediction output among features, enabling both local (per-prediction) and global (overall) interpretability.",
  },
  {
    id: 71,
    section: "Model Development",
    question:
      "Which metric is most appropriate when false negatives are far more costly than false positives (e.g., disease detection)?",
    options: [
      "A. Precision — minimize false positives.",
      "B. Recall (Sensitivity) — maximize true positive detection.",
      "C. Accuracy — overall correctness.",
      "D. RMSE — magnitude of errors.",
    ],
    answer: "B",
    explanation:
      "Recall = TP / (TP + FN). When missing a positive (FN) is dangerous, maximizing recall ensures most true positives are caught even at the cost of more false alarms.",
  },
  {
    id: 72,
    section: "Model Development",
    question:
      "When is precision more important than recall?",
    options: [
      "A. When missing a positive case is dangerous (e.g., cancer detection).",
      "B. When false positives are expensive or harmful (e.g., flagging legitimate emails as spam).",
      "C. When the dataset is perfectly balanced.",
      "D. When using a regression model.",
    ],
    answer: "B",
    explanation:
      "Precision = TP / (TP + FP). When false positives have a high cost (e.g., acting on a wrong fraud alert), maximizing precision reduces unnecessary actions.",
  },
  {
    id: 73,
    section: "Model Development",
    question:
      "What does Log Loss (binary cross-entropy) penalize?",
    options: [
      "A. Large absolute regression errors.",
      "B. Confident wrong classifications more heavily than uncertain wrong ones.",
      "C. The number of features in the model.",
      "D. Models with too many hyperparameters.",
    ],
    answer: "B",
    explanation:
      "Log Loss is -log(p) when the true label is positive. A confident wrong prediction (e.g., predicting 0.99 for a negative) incurs a very large loss.",
  },
  {
    id: 74,
    section: "Model Development",
    question:
      "In a SparkML CrossValidator, what is the purpose of ParamGridBuilder?",
    options: [
      "A. To specify the number of cross-validation folds.",
      "B. To define the grid of hyperparameter values that CrossValidator will search over.",
      "C. To set the evaluation metric.",
      "D. To define the feature columns for the estimator.",
    ],
    answer: "B",
    explanation:
      "ParamGridBuilder().addGrid(estimator.param, values).build() returns a list of parameter maps that CrossValidator evaluates for each fold.",
  },
  {
    id: 75,
    section: "Model Development",
    question:
      "What algorithm does Hyperopt use by default for smart hyperparameter search?",
    options: [
      "A. Grid search exhaustive scan.",
      "B. Random search.",
      "C. TPE (Tree of Parzen Estimators) — a Bayesian optimization method.",
      "D. Simulated annealing.",
    ],
    answer: "C",
    explanation:
      "tpe.suggest is Hyperopt default and recommended algorithm. It fits a probabilistic model to the objective and focuses trials on likely good regions.",
  },
  {
    id: 76,
    section: "Model Development",
    question:
      "A model trained on log1p-transformed targets predicts log-space values. Before computing RMSE versus original targets, you must:",
    options: [
      "A. Multiply predictions by e.",
      "B. Apply numpy.expm1() to the predictions.",
      "C. Square the predictions.",
      "D. Subtract the mean of the log-transformed target.",
    ],
    answer: "B",
    explanation:
      "np.expm1() is the inverse of np.log1p(). It correctly reverses the log1p transform, handling the zero-value edge case.",
  },
  {
    id: 77,
    section: "Model Development",
    question:
      "What is SMOTE (Synthetic Minority Over-sampling Technique) used for?",
    options: [
      "A. Removing outliers from training data.",
      "B. Generating synthetic minority class samples by interpolating between existing minority examples.",
      "C. Selecting the most important features from a dataset.",
      "D. Optimizing model hyperparameters using gradient descent.",
    ],
    answer: "B",
    explanation:
      "SMOTE creates new minority samples along line segments between existing minority samples, balancing the class distribution without simply duplicating existing records.",
  },
  {
    id: 78,
    section: "Model Development",
    question:
      "Which sklearn algorithm is best suited for a multi-class classification problem with high-dimensional sparse text features?",
    options: [
      "A. K-Nearest Neighbors.",
      "B. Multinomial Naive Bayes or Linear SVM.",
      "C. K-Means clustering.",
      "D. Linear Regression.",
    ],
    answer: "B",
    explanation:
      "Multinomial NB and Linear SVM both handle high-dimensional sparse data efficiently and are classic baselines for text classification.",
  },
  {
    id: 79,
    section: "Model Development",
    question:
      "If you have 4 hyperparameter values for param A, 3 values for param B, and use 4-fold CV, how many total model fits does GridSearchCV perform?",
    options: ["A. 7", "B. 12", "C. 48", "D. 16"],
    answer: "C",
    explanation:
      "4 × 3 = 12 combinations × 4 folds = 48 model fits in total.",
  },
  {
    id: 80,
    section: "Model Development",
    question:
      "Which of the following correctly defines the confusion matrix for binary classification?",
    options: [
      "A. A 2×2 table of TP, FP, FN, TN counts.",
      "B. A plot of precision vs recall at different thresholds.",
      "C. A heatmap of feature correlations.",
      "D. A table mapping predicted probabilities to binary labels.",
    ],
    answer: "A",
    explanation:
      "The confusion matrix rows represent actual classes and columns represent predicted classes, containing TP, TN, FP, FN counts.",
  },

  // ─── SECTION 4: MODEL DEPLOYMENT ─────────────────────────────────────────
  {
    id: 81,
    section: "Model Deployment",
    question:
      "What are the three primary model serving approaches in Databricks, and what distinguishes them?",
    options: [
      "A. Batch: periodic bulk scoring; Streaming: continuous scoring on arriving data; Real-time: instant on-demand scoring per request.",
      "B. Batch: real-time predictions; Streaming: historical predictions; Real-time: batch predictions.",
      "C. All three have identical latency; they differ only in cost.",
      "D. Streaming is only for text; batch is only for tabular data.",
    ],
    answer: "A",
    explanation:
      "Batch suits large periodic jobs (hours acceptable). Streaming continuously processes new records as they arrive (seconds). Real-time serves individual requests via REST API (milliseconds).",
  },
  {
    id: 82,
    section: "Model Deployment",
    question:
      "What is the recommended approach to deploy a custom Python model to a Databricks Model Serving endpoint?",
    options: [
      "A. Log the model with mlflow.log_model(), register it in the Model Registry, then deploy from the registry UI or API.",
      "B. Copy the pickled model file directly to a serving cluster directory.",
      "C. Use spark.submit() with the model file as an argument.",
      "D. Create a Databricks Job with a 'serving' task type.",
    ],
    answer: "A",
    explanation:
      "The standard Databricks deployment path is: log → register → deploy via the Model Serving UI or REST API, using the registered model URI.",
  },
  {
    id: 83,
    section: "Model Deployment",
    question:
      "How do you perform batch inference on a pandas DataFrame using a registered MLflow model?",
    options: [
      "A. model = mlflow.pyfunc.load_model(model_uri); predictions = model.predict(df)",
      "B. model.batch_predict(df)",
      "C. mlflow.batch_infer(model_uri, df)",
      "D. spark.ml.predict(model_uri, df)",
    ],
    answer: "A",
    explanation:
      "mlflow.pyfunc.load_model() loads any registered model as a pyfunc, and .predict(df) runs inference on a pandas DataFrame.",
  },
  {
    id: 84,
    section: "Model Deployment",
    question:
      "How do you convert a registered MLflow model into a Spark UDF for distributed batch inference?",
    options: [
      "A. mlflow.pyfunc.spark_udf(spark, model_uri)",
      "B. mlflow.spark.load_model(model_uri)",
      "C. model.to_spark_udf()",
      "D. spark.udf.register('model', mlflow.load_model(model_uri))",
    ],
    answer: "A",
    explanation:
      "mlflow.pyfunc.spark_udf(spark, model_uri) returns a Spark UDF that can be applied to a DataFrame column, distributing inference across executors.",
  },
  {
    id: 85,
    section: "Model Deployment",
    question:
      "How do you query a Databricks Model Serving real-time endpoint programmatically?",
    options: [
      "A. Send an HTTP POST request with JSON payload to the endpoint URL using an API token.",
      "B. Call mlflow.realtime_predict(endpoint_name, data).",
      "C. Use databricks.serving.invoke(endpoint_name, data).",
      "D. Load the model from the registry locally and call .predict().",
    ],
    answer: "A",
    explanation:
      "Databricks Model Serving exposes a REST endpoint. Clients send POST requests with Authorization: Bearer <token> and a JSON body with the input data.",
  },
  {
    id: 86,
    section: "Model Deployment",
    question:
      "What does traffic splitting between model endpoint configurations enable?",
    options: [
      "A. Reducing inference costs by routing requests to the cheapest hardware.",
      "B. A/B testing or canary deployments by routing defined percentages of traffic to different model versions.",
      "C. Distributing large batch jobs across multiple endpoints.",
      "D. Preventing endpoint timeouts through automatic retries.",
    ],
    answer: "B",
    explanation:
      "Traffic splitting lets you send e.g. 90% to the champion and 10% to the challenger, safely testing a new model version with real traffic before full rollout.",
  },
  {
    id: 87,
    section: "Model Deployment",
    question:
      "According to the exam guide, how is streaming inference performed with Delta Live Tables?",
    options: [
      "A. A DLT pipeline applies the model as a Spark UDF to each micro-batch of incoming data.",
      "B. A REST endpoint is called for every individual streaming record.",
      "C. Pandas batch inference is run inside a DLT scheduled trigger.",
      "D. mlflow.stream_predict() is called within a DLT pipeline definition.",
    ],
    answer: "A",
    explanation:
      "DLT pipelines can load a model and apply it as a Spark UDF, processing data continuously as it arrives and benefiting from DLT automatic scaling and data quality features.",
  },
  {
    id: 88,
    section: "Model Deployment",
    question:
      "What is the key advantage of batch inference over real-time inference?",
    options: [
      "A. Batch inference has lower per-request latency.",
      "B. Batch inference is cost-effective for large volumes of data when immediate responses are not required.",
      "C. Batch inference supports more complex models.",
      "D. Batch inference scales better to a large number of concurrent users.",
    ],
    answer: "B",
    explanation:
      "Batch jobs process data efficiently in bulk without the overhead of a persistent serving endpoint, making them ideal for daily/weekly scoring pipelines.",
  },
  {
    id: 89,
    section: "Model Deployment",
    question:
      "What is the key advantage of real-time inference over batch inference?",
    options: [
      "A. Real-time inference processes more data simultaneously.",
      "B. Real-time inference returns predictions immediately for individual requests.",
      "C. Real-time inference is always more cost-effective.",
      "D. Real-time inference does not require model registration.",
    ],
    answer: "B",
    explanation:
      "Real-time (online) serving answers each request within milliseconds, enabling interactive applications like recommendation systems or fraud detection at point-of-transaction.",
  },
  {
    id: 90,
    section: "Model Deployment",
    question:
      "What is the purpose of FeatureEngineeringClient.score_batch()?",
    options: [
      "A. To train a model using Feature Store features.",
      "B. To score a model that was trained with Feature Store features, automatically joining required features at inference time.",
      "C. To evaluate model accuracy on a test set.",
      "D. To write batch prediction results back to a feature table.",
    ],
    answer: "B",
    explanation:
      "score_batch() uses stored feature lineage to automatically retrieve and join the necessary features for the entities in the scoring DataFrame.",
  },
  {
    id: 91,
    section: "Model Deployment",
    question:
      "Why is using the Feature Store for inference preferable to manually joining features at scoring time?",
    options: [
      "A. The Feature Store is faster than Delta Lake joins.",
      "B. It prevents training-serving skew by ensuring the same feature logic is used in both training and scoring.",
      "C. It automatically retrains the model when features change.",
      "D. It eliminates the need for a serving endpoint.",
    ],
    answer: "B",
    explanation:
      "Training-serving skew occurs when feature computation logic differs between training and serving. The Feature Store enforces a single definition used in both contexts.",
  },
  {
    id: 92,
    section: "Model Deployment",
    question:
      "Which method distributes inference across Spark partitions by applying a Python function to each group of rows?",
    options: [
      "A. df.rdd.map()",
      "B. df.groupBy().applyInPandas()",
      "C. df.select(mlflow.pyfunc.load_model())",
      "D. df.foreach()",
    ],
    answer: "B",
    explanation:
      "applyInPandas() applies a function to each group as a pandas DataFrame, enabling grouped predictions. For partitioned (ungrouped) inference use mapInPandas().",
  },
  {
    id: 93,
    section: "Model Deployment",
    question:
      "What does Databricks Model Serving auto-scaling provide?",
    options: [
      "A. Automatic model retraining when performance degrades.",
      "B. Automatic scaling of serving compute up or down based on request volume.",
      "C. Automatic feature updates in the online feature store.",
      "D. Automatic rollback to the previous version when errors are detected.",
    ],
    answer: "B",
    explanation:
      "Model Serving endpoints auto-scale the number of replicas based on traffic, ensuring cost efficiency at low load and performance under high load.",
  },
  {
    id: 94,
    section: "Model Deployment",
    question:
      "What is an mlflow.pyfunc.PythonModel used for?",
    options: [
      "A. A model trained specifically with Python scripts, incompatible with other frameworks.",
      "B. A custom class with a predict() method that wraps any logic (pre/post-processing + model) into a deployable MLflow model.",
      "C. A model format that only accepts pandas DataFrames.",
      "D. A deprecated MLflow model type replaced by mlflow.spark.",
    ],
    answer: "B",
    explanation:
      "Subclassing mlflow.pyfunc.PythonModel and implementing predict() lets you bundle arbitrary Python logic (custom preprocessing, multiple models) into a single MLflow artifact.",
  },
  {
    id: 95,
    section: "Model Deployment",
    question:
      "Which of the following is a valid use case for streaming inference?",
    options: [
      "A. Generating a weekly customer churn report.",
      "B. Detecting credit card fraud on transactions as they arrive in a Kafka stream.",
      "C. Scoring a static CSV file of historical records.",
      "D. Retraining a model every month on new data.",
    ],
    answer: "B",
    explanation:
      "Streaming inference continuously processes events as they arrive, providing near-real-time decisions — ideal for fraud detection, anomaly detection, and live recommendation systems.",
  },
  {
    id: 96,
    section: "Model Deployment",
    question:
      "What does the model URI format 'models:/catalog.schema.model_name/1' refer to?",
    options: [
      "A. The model training run with ID '1'.",
      "B. Version 1 of the registered model 'model_name' in Unity Catalog.",
      "C. The first column of the model's output schema.",
      "D. The first experiment run associated with the model.",
    ],
    answer: "B",
    explanation:
      "In Unity Catalog, the model URI is models:/<catalog>.<schema>.<model_name>/<version_number>. You can also use @alias instead of a version number.",
  },
  {
    id: 97,
    section: "Model Deployment",
    question:
      "What is the purpose of the 'environment' dependencies (conda.yaml or requirements.txt) logged with an MLflow model?",
    options: [
      "A. To document the training infrastructure for audit purposes only.",
      "B. To reproduce the exact Python environment when loading or serving the model, ensuring dependency consistency.",
      "C. To specify the serving cluster size.",
      "D. To restrict which users can access the model.",
    ],
    answer: "B",
    explanation:
      "MLflow logs the Python environment specification with every model. Model Serving and mlflow models serve use it to recreate the runtime environment.",
  },
  {
    id: 98,
    section: "Model Deployment",
    question:
      "How does Databricks handle champion/challenger model comparison in production?",
    options: [
      "A. Train both models simultaneously on the same cluster.",
      "B. Split live traffic between the champion and challenger endpoints using traffic routing configuration, then compare metrics.",
      "C. Run both models on the same endpoint and average their predictions.",
      "D. Champion/challenger testing is not supported in Databricks Model Serving.",
    ],
    answer: "B",
    explanation:
      "Traffic splitting lets you route a percentage of real requests to the challenger model, collecting live metrics to compare against the champion before full promotion.",
  },
  {
    id: 99,
    section: "Model Deployment",
    question:
      "When deploying a model to a Databricks Model Serving endpoint, what is the minimum MLflow step required before deployment?",
    options: [
      "A. The model must be registered in the MLflow Model Registry (Unity Catalog or workspace).",
      "B. The model must pass a validation notebook.",
      "C. The model must be exported to ONNX format.",
      "D. The model must be logged to a specific experiment named 'production'.",
    ],
    answer: "A",
    explanation:
      "Databricks Model Serving deploys models from the Model Registry. The model must first be registered (with a name and version) before it can be deployed to an endpoint.",
  },
  {
    id: 100,
    section: "Model Deployment",
    question:
      "Which approach is correct for applying a registered MLflow model to each partition of a large Spark DataFrame for distributed batch inference?",
    options: [
      "A. loaded_model = mlflow.pyfunc.load_model(uri); sdf.withColumn('pred', spark_udf(...))",
      "B. spark_udf = mlflow.pyfunc.spark_udf(spark, model_uri); sdf.withColumn('pred', spark_udf(*feature_cols))",
      "C. sdf.foreach(lambda row: mlflow.predict(row))",
      "D. sdf.select(mlflow.batch_predict(model_uri))",
    ],
    answer: "B",
    explanation:
      "mlflow.pyfunc.spark_udf() wraps the model as a Spark UDF. Applying it with withColumn() distributes inference across all Spark partitions.",
  },

  // ─── MIXED / INTEGRATED ───────────────────────────────────────────────────
  {
    id: 101,
    section: "Databricks Machine Learning",
    question:
      "Which MLflow function automatically logs parameters, metrics, and models for supported sklearn estimators with a single line?",
    options: [
      "A. mlflow.log_all()",
      "B. mlflow.sklearn.autolog()",
      "C. mlflow.capture()",
      "D. mlflow.sklearn.track()",
    ],
    answer: "B",
    explanation:
      "mlflow.sklearn.autolog() (or mlflow.autolog()) hooks into sklearn's fit() to automatically log hyperparameters, training metrics, and the fitted model artifact.",
  },
  {
    id: 102,
    section: "Databricks Machine Learning",
    question:
      "What is the purpose of mlflow.set_experiment(experiment_name)?",
    options: [
      "A. To deploy a model to the specified experiment environment.",
      "B. To direct all subsequent mlflow.start_run() calls to log under the specified experiment.",
      "C. To configure the compute resources for the experiment.",
      "D. To set the data source used in the experiment.",
    ],
    answer: "B",
    explanation:
      "Without calling set_experiment(), runs are logged to the default experiment. set_experiment() organizes runs by feature, team, or model type.",
  },
  {
    id: 103,
    section: "Databricks Machine Learning",
    question:
      "How do you search for all MLflow runs where validation accuracy exceeded 0.9?",
    options: [
      "A. mlflow.search_runs(filter_string=\"metrics.val_accuracy > 0.9\")",
      "B. mlflow.get_runs(metric='val_accuracy', min_value=0.9)",
      "C. MlflowClient().list_runs(filter='accuracy>0.9')",
      "D. mlflow.query_runs(where='val_accuracy > 0.9')",
    ],
    answer: "A",
    explanation:
      "mlflow.search_runs() accepts a SQL-like filter_string supporting metrics, params, tags, and run attributes.",
  },
  {
    id: 104,
    section: "Databricks Machine Learning",
    question:
      "What information does mlflow.infer_signature(X_train, predictions) capture?",
    options: [
      "A. The training duration and compute used.",
      "B. The input column names/types and output column names/types for schema enforcement.",
      "C. The model hyperparameters and version.",
      "D. The lineage back to the training data in Delta Lake.",
    ],
    answer: "B",
    explanation:
      "infer_signature() inspects a sample input and its corresponding predictions to automatically create an MLflow ModelSignature object.",
  },
  {
    id: 105,
    section: "Data Processing",
    question:
      "A data scientist uses df.summary() and notices the 50th percentile of 'salary' is $55,000 but the mean is $120,000. What does this suggest?",
    options: [
      "A. The salary data is normally distributed.",
      "B. The salary distribution is heavily right-skewed with large outliers pulling the mean up.",
      "C. There are many missing values in the salary column.",
      "D. The salary data needs to be normalized.",
    ],
    answer: "B",
    explanation:
      "When the mean is much higher than the median, the distribution is right-skewed — a small number of very high earners inflate the mean without affecting the median.",
  },
  {
    id: 106,
    section: "Data Processing",
    question:
      "Which Spark DataFrame API call selects a subset of columns and applies a filter in one chain?",
    options: [
      "A. df.select('age', 'salary').where(df.age > 30)",
      "B. df.query('age > 30 AND salary > 50000')",
      "C. df.subset(['age', 'salary'], condition='age > 30')",
      "D. df.take(columns=['age','salary'], filter='age>30')",
    ],
    answer: "A",
    explanation:
      "Spark DataFrame methods are chainable. .select() picks columns, .where() (alias for .filter()) applies the condition.",
  },
  {
    id: 107,
    section: "Model Development",
    question:
      "What is the difference between hp.uniform() and hp.loguniform() in Hyperopt?",
    options: [
      "A. hp.uniform() samples from a normal distribution; hp.loguniform() from a uniform distribution.",
      "B. hp.uniform() samples linearly between low and high; hp.loguniform() samples such that the log of the value is uniform — better for learning rates.",
      "C. They are identical except that hp.loguniform() only works with integers.",
      "D. hp.loguniform() is deprecated; use hp.quniform() instead.",
    ],
    answer: "B",
    explanation:
      "hp.loguniform(label, low, high) returns exp(uniform(low,high)), useful for hyperparameters spanning orders of magnitude like learning rate (1e-4 to 1e-1).",
  },
  {
    id: 108,
    section: "Model Development",
    question:
      "Why is it important to fit preprocessing transformers only on training data and not on test data?",
    options: [
      "A. Test data is too large to fit transformers on.",
      "B. Fitting on test data causes data leakage — the model would indirectly see test distribution information during training.",
      "C. Sklearn Pipelines cannot fit transformers on test data anyway.",
      "D. Test data preprocessing is handled automatically by the serving endpoint.",
    ],
    answer: "B",
    explanation:
      "Fitting a scaler or imputer on test data reveals information about the test distribution to the model, causing optimistically biased evaluation metrics.",
  },
  {
    id: 109,
    section: "Data Processing",
    question:
      "A feature 'days_since_last_purchase' has a distribution with a very long right tail. Which transformation would best normalize it for a linear model?",
    options: [
      "A. One-hot encode it.",
      "B. Apply np.log1p() to compress the right tail.",
      "C. Apply StandardScaler without any other transformation.",
      "D. Bin it into 3 categories: low, medium, high.",
    ],
    answer: "B",
    explanation:
      "log1p handles zeros (log(0) is undefined) and compresses the long right tail, making the distribution more symmetric for linear models.",
  },
  {
    id: 110,
    section: "Databricks Machine Learning",
    question:
      "A team wants to reuse the same feature computation logic in both model training and real-time serving to prevent skew. Which Databricks tool best addresses this?",
    options: [
      "A. Databricks Repos",
      "B. Databricks Feature Engineering (Feature Store)",
      "C. MLflow Pipelines",
      "D. Delta Live Tables",
    ],
    answer: "B",
    explanation:
      "The Feature Store stores both the feature data AND the transformation logic. score_batch() and online serving both use the same stored definitions, eliminating training-serving skew.",
  },
  {
    id: 111,
    section: "Databricks Machine Learning",
    question:
      "What does Databricks Repos provide in an ML workflow?",
    options: [
      "A. A hosted Git repository with built-in CI/CD pipelines.",
      "B. Integration with external Git providers (GitHub, GitLab, Bitbucket) for version-controlling notebooks and Python files.",
      "C. A model registry alternative to MLflow.",
      "D. Automated experiment tracking for every notebook cell.",
    ],
    answer: "B",
    explanation:
      "Databricks Repos lets you clone, pull, push, and branch from Git directly in the workspace, enabling version control of ML code and notebooks.",
  },
  {
    id: 112,
    section: "Databricks Machine Learning",
    question:
      "What is Unity Catalog's primary role in an ML workflow?",
    options: [
      "A. Speeding up model training using distributed compute.",
      "B. Governing data and ML assets (tables, models, features) with fine-grained access control and data lineage.",
      "C. Automatically deploying models to production endpoints.",
      "D. Replacing MLflow for all experiment tracking needs.",
    ],
    answer: "B",
    explanation:
      "Unity Catalog is Databricks' unified governance layer providing ACLs, audit logs, and lineage for all data assets including feature tables and registered models.",
  },
  {
    id: 113,
    section: "Model Development",
    question:
      "Which of the following is an example of a high-bias model configuration?",
    options: [
      "A. A decision tree with no depth limit.",
      "B. A linear regression model applied to data with clear nonlinear relationships.",
      "C. A neural network with 100 hidden layers.",
      "D. A Random Forest with 1,000 trees.",
    ],
    answer: "B",
    explanation:
      "Linear regression assumes a linear relationship. When the true pattern is nonlinear, the model cannot fit the data well regardless of training data size, exhibiting high bias.",
  },
  {
    id: 114,
    section: "Model Development",
    question:
      "What is the effect of increasing the regularization parameter (C in SVM, alpha in Ridge/Lasso) on bias and variance?",
    options: [
      "A. More regularization decreases bias and increases variance.",
      "B. More regularization increases bias and decreases variance.",
      "C. More regularization decreases both bias and variance.",
      "D. Regularization has no effect on bias or variance.",
    ],
    answer: "B",
    explanation:
      "Stronger regularization constrains the model, simplifying it (higher bias) but reducing its sensitivity to training data noise (lower variance).",
  },
  {
    id: 115,
    section: "Model Deployment",
    question:
      "Which Delta Live Tables feature makes it suitable for streaming ML inference pipelines?",
    options: [
      "A. It supports auto-scaling compute and continuous or triggered execution modes.",
      "B. It is optimized only for SQL batch transformations.",
      "C. It automatically retrains models when data drifts.",
      "D. It replaces MLflow for model versioning.",
    ],
    answer: "A",
    explanation:
      "DLT supports both batch and streaming modes with auto-scaling, data quality expectations, and simplified pipeline management, making it ideal for streaming inference.",
  },
  {
    id: 116,
    section: "Databricks Machine Learning",
    question:
      "What is the difference between mlflow.log_param() and mlflow.log_metric()?",
    options: [
      "A. log_param() logs numeric values; log_metric() logs string values.",
      "B. log_param() logs a single configuration value (once); log_metric() logs numeric values that can be recorded per-step to track progress over time.",
      "C. log_param() stores files; log_metric() stores scalars.",
      "D. They are identical in behavior.",
    ],
    answer: "B",
    explanation:
      "Params are hyperparameters logged once at the start of a run. Metrics can be logged at each training step (epoch, iteration) with a step number to track learning curves.",
  },
  {
    id: 117,
    section: "Model Deployment",
    question:
      "What is model drift and why is it important for production MLOps?",
    options: [
      "A. Model drift refers to the gradual increase in model file size.",
      "B. Model drift occurs when a model performance degrades over time because the real-world data distribution shifts away from the training distribution.",
      "C. Model drift describes parameter changes that happen during live serving.",
      "D. Model drift is caused by using outdated ML framework versions.",
    ],
    answer: "B",
    explanation:
      "Production data distributions change over time (concept drift, data drift). Monitoring for drift triggers retraining to maintain model quality.",
  },
  {
    id: 118,
    section: "Data Processing",
    question:
      "What is the purpose of stratified k-fold cross-validation compared to regular k-fold?",
    options: [
      "A. It uses more data for training in each fold.",
      "B. It ensures each fold contains approximately the same proportion of each class as the original dataset.",
      "C. It randomizes the order of folds to reduce variance.",
      "D. It is faster because it creates fewer folds.",
    ],
    answer: "B",
    explanation:
      "Stratified k-fold is critical for imbalanced datasets, ensuring rare classes appear in every fold's training and validation sets in representative proportions.",
  },
  {
    id: 119,
    section: "Databricks Machine Learning",
    question:
      "Which of the following best describes MLflow nested runs?",
    options: [
      "A. Child runs share the same run ID as the parent run.",
      "B. Nested runs are created with mlflow.start_run(nested=True) and appear as children under a parent run in the UI.",
      "C. Nested runs cannot log metrics, only parameters.",
      "D. Each nested run automatically creates a new experiment.",
    ],
    answer: "B",
    explanation:
      "Nested runs are useful for organizing hyperparameter tuning — the parent run represents the tuning session and each child run is one trial.",
  },
  {
    id: 120,
    section: "Model Development",
    question:
      "For a time-series prediction task, why is standard k-fold cross-validation inappropriate?",
    options: [
      "A. It trains too many models.",
      "B. It can use future data to predict the past, introducing temporal data leakage.",
      "C. It does not support regression models.",
      "D. It is too slow for sequential data.",
    ],
    answer: "B",
    explanation:
      "Standard k-fold shuffles data randomly. For time series, validation data must always be chronologically after training data. Use TimeSeriesSplit instead.",
  },
  {
    id: 121,
    section: "Model Development",
    question:
      "What sklearn class is used to build a hyperparameter grid for SparkML's CrossValidator?",
    options: [
      "A. sklearn.model_selection.ParameterGrid",
      "B. pyspark.ml.tuning.ParamGridBuilder",
      "C. pyspark.ml.tuning.HyperparamGrid",
      "D. spark.ml.ParamMap",
    ],
    answer: "B",
    explanation:
      "ParamGridBuilder from pyspark.ml.tuning creates a list of parameter maps compatible with SparkML's CrossValidator and TrainValidationSplit.",
  },
  {
    id: 122,
    section: "Databricks Machine Learning",
    question:
      "In which scenario is promoting a MODEL ARTIFACT preferred over promoting training code?",
    options: [
      "A. When data distributions differ significantly across environments.",
      "B. When training is expensive, data is consistent across environments, and you want a fully validated artifact promoted without retraining.",
      "C. When the model was trained using AutoML.",
      "D. When the model uses a custom pyfunc wrapper.",
    ],
    answer: "B",
    explanation:
      "Promoting the artifact avoids retraining cost and ensures the exact same model that was validated moves to production, assuming environment data distributions are consistent.",
  },
  {
    id: 123,
    section: "Data Processing",
    question:
      "What does Pandas API on Spark (formerly Koalas) provide?",
    options: [
      "A. A way to convert Spark DataFrames to local pandas DataFrames automatically.",
      "B. A pandas-compatible API that runs on Spark, enabling pandas code to scale to large datasets.",
      "C. A SQL interface for querying pandas DataFrames.",
      "D. A replacement for PySpark that uses pandas syntax only.",
    ],
    answer: "B",
    explanation:
      "Pandas API on Spark lets you write familiar pandas code that executes on Spark's distributed engine, bridging the gap between single-node and distributed computing.",
  },
  {
    id: 124,
    section: "Model Development",
    question:
      "Which statement about Precision is correct?",
    options: [
      "A. Precision = TP / (TP + FN): of all actual positives, how many did we find?",
      "B. Precision = TP / (TP + FP): of all predicted positives, how many were actually positive?",
      "C. Precision = (TP + TN) / Total: overall correctness.",
      "D. Precision = 2 * (P * R) / (P + R): harmonic mean of precision and recall.",
    ],
    answer: "B",
    explanation:
      "Precision measures the quality of positive predictions — how often a positive prediction is correct. High precision = few false alarms.",
  },
  {
    id: 125,
    section: "Model Development",
    question:
      "Which statement about Recall is correct?",
    options: [
      "A. Recall = TP / (TP + FP): of all predicted positives, how many were correct?",
      "B. Recall = TP / (TP + FN): of all actual positives, how many did the model detect?",
      "C. Recall = (TP + TN) / Total: overall correctness.",
      "D. Recall = 2 * (P * R) / (P + R): harmonic mean.",
    ],
    answer: "B",
    explanation:
      "Recall (Sensitivity, True Positive Rate) measures completeness — how many of the actual positives did the model catch. High recall = few missed positives.",
  },
  {
    id: 126,
    section: "Model Deployment",
    question:
      "What does the term 'training-serving skew' mean?",
    options: [
      "A. The model performs better on GPU training clusters than on CPU serving clusters.",
      "B. Differences in feature values between training time and serving time caused by different computation logic.",
      "C. The training dataset being much larger than the serving dataset.",
      "D. A mismatch between training data schema and serving request schema.",
    ],
    answer: "B",
    explanation:
      "Training-serving skew is a silent and common production failure. Using the Feature Store or consistent transformation code in both training and serving prevents it.",
  },
  {
    id: 127,
    section: "Databricks Machine Learning",
    question:
      "How does MLflow's Model Registry enable model governance compared to just storing model artifacts in DBFS?",
    options: [
      "A. The registry stores models in a more efficient binary format.",
      "B. The registry provides named versioning, lifecycle management (aliases/stages), ACLs, audit trails, and a discovery interface.",
      "C. The registry is required for model serving to work.",
      "D. The registry automatically retrains models when data changes.",
    ],
    answer: "B",
    explanation:
      "The Model Registry adds structure (named models, versions, aliases) and governance (access control, audit logs) that raw artifact storage in DBFS cannot provide.",
  },
  {
    id: 128,
    section: "Data Processing",
    question:
      "What is the effect of removing the top 1% and bottom 1% of values in a feature as an outlier handling strategy?",
    options: [
      "A. It normalizes the feature to the range [0, 1].",
      "B. It caps the influence of extreme values (winsorization) but may discard genuine data points.",
      "C. It fills the removed values with the median.",
      "D. It converts the feature to a log scale.",
    ],
    answer: "B",
    explanation:
      "Trimming or winsorizing removes/clips extreme percentiles, reducing the impact of outliers on model training while risking losing rare but valid observations.",
  },
  {
    id: 129,
    section: "Model Development",
    question:
      "What is the F1 score formula?",
    options: [
      "A. (Precision + Recall) / 2",
      "B. 2 * (Precision * Recall) / (Precision + Recall)",
      "C. TP / (TP + FP + FN)",
      "D. Precision - Recall",
    ],
    answer: "B",
    explanation:
      "F1 is the harmonic mean of precision and recall, giving equal weight to both. The harmonic mean penalizes extreme imbalances between precision and recall.",
  },
  {
    id: 130,
    section: "Databricks Machine Learning",
    question:
      "What is the primary purpose of the online feature table in Databricks Feature Engineering?",
    options: [
      "A. To store large historical datasets for batch model training.",
      "B. To provide low-latency (millisecond) key-value lookups for real-time model serving.",
      "C. To serve as a backup for the Delta offline feature table.",
      "D. To automatically sync features to external databases.",
    ],
    answer: "B",
    explanation:
      "Online tables (backed by low-latency key-value stores) enable feature lookup in real-time serving without joining large Delta tables at inference time.",
  },
  {
    id: 131,
    section: "Databricks Machine Learning",
    question:
      "A data scientist registers a model in the Unity Catalog registry and wants to mark it as ready for production. What is the correct approach?",
    options: [
      "A. Transition the model version to the 'Production' stage.",
      "B. Set a 'champion' alias on the desired version using MlflowClient().set_registered_model_alias().",
      "C. Rename the model version to 'production_v1'.",
      "D. Copy the model artifact to a 'production' folder in DBFS.",
    ],
    answer: "B",
    explanation:
      "Unity Catalog replaced the legacy stage system (None/Staging/Production/Archived) with flexible aliases. Assigning 'champion' alias is the recommended approach.",
  },
  {
    id: 132,
    section: "Model Development",
    question:
      "Which algorithm is most appropriate for a regression problem where the relationship between features and target is known to be nonlinear?",
    options: [
      "A. Linear Regression with L2 regularization.",
      "B. Gradient Boosting Regressor or Random Forest Regressor.",
      "C. Logistic Regression.",
      "D. Naive Bayes Regressor.",
    ],
    answer: "B",
    explanation:
      "Tree-based ensembles (GBDT, Random Forest) naturally capture nonlinear relationships and feature interactions without requiring explicit feature engineering.",
  },
  {
    id: 133,
    section: "Model Deployment",
    question:
      "What happens when you change the alias 'champion' to point to version 3 instead of version 2 in Unity Catalog?",
    options: [
      "A. Version 2 is deleted from the registry.",
      "B. Any code loading the model by '@champion' alias will now receive version 3 without code changes.",
      "C. Both versions are served simultaneously and predictions are averaged.",
      "D. The alias change requires redeploying the serving endpoint.",
    ],
    answer: "B",
    explanation:
      "Aliases are indirection pointers. Updating the alias transparently redirects all consumers (serving endpoints, inference scripts) to the new version.",
  },
  {
    id: 134,
    section: "Data Processing",
    question:
      "When building a machine learning pipeline, why should the entire preprocessing pipeline be fitted only on training data?",
    options: [
      "A. Fitting on all data is more efficient computationally.",
      "B. Fitting scalers and encoders on test data introduces leakage of test statistics into the model.",
      "C. sklearn Pipelines technically cannot access test data at fit time.",
      "D. Test data preprocessing is always handled by the serving layer.",
    ],
    answer: "B",
    explanation:
      "If a scaler is fit on test data, the model effectively sees test data statistics during training, producing optimistic evaluation metrics that won't hold in production.",
  },
  {
    id: 135,
    section: "Databricks Machine Learning",
    question:
      "What does mlflow.end_run() do?",
    options: [
      "A. Shuts down the MLflow tracking server.",
      "B. Ends the currently active MLflow run and persists all logged data.",
      "C. Deletes all runs in the current experiment.",
      "D. Automatically registers the last logged model.",
    ],
    answer: "B",
    explanation:
      "mlflow.end_run() closes the active run. When using the context manager (with mlflow.start_run()), this is called automatically on exit.",
  },
  {
    id: 136,
    section: "Model Development",
    question:
      "What type of problem is addressed by class_weight='balanced' in sklearn classifiers?",
    options: [
      "A. Multi-label classification.",
      "B. Class imbalance — automatically assigns higher weights to minority classes inversely proportional to their frequency.",
      "C. Multi-output regression.",
      "D. Feature scaling for distance-based algorithms.",
    ],
    answer: "B",
    explanation:
      "class_weight='balanced' makes sklearn compute class weights as n_samples / (n_classes * np.bincount(y)), effectively upweighting minority classes during training.",
  },
  {
    id: 137,
    section: "Databricks Machine Learning",
    question:
      "What does the MLflow UI 'Compare' feature enable?",
    options: [
      "A. Running two models simultaneously to compare real-time latency.",
      "B. Side-by-side comparison of parameters, metrics, and artifacts across multiple selected runs.",
      "C. Comparing two experiments from different workspaces.",
      "D. Generating a statistical significance report between two runs.",
    ],
    answer: "B",
    explanation:
      "The MLflow UI allows selecting multiple runs and viewing a comparison table of their logged params and metrics, making it easy to identify the best configuration.",
  },
  {
    id: 138,
    section: "Data Processing",
    question:
      "What is target encoding and when is it appropriate?",
    options: [
      "A. Encoding the target variable as a numeric value; always appropriate.",
      "B. Replacing each category value with the mean of the target for that category; useful for high-cardinality features but requires careful cross-fold encoding to avoid leakage.",
      "C. A synonym for one-hot encoding.",
      "D. Encoding features based on their correlation with other features.",
    ],
    answer: "B",
    explanation:
      "Target encoding can capture information for high-cardinality categoricals, but if done naively on the full training set it leaks target information. Cross-fold or leave-one-out encoding prevents this.",
  },
  {
    id: 139,
    section: "Model Deployment",
    question:
      "How can Databricks Workflows (Jobs) be used in a model deployment pipeline?",
    options: [
      "A. They replace MLflow for experiment tracking in production.",
      "B. They orchestrate multi-task pipelines: data prep → training → evaluation → registration → deployment as scheduled or triggered jobs.",
      "C. They serve models as REST endpoints.",
      "D. They automatically retrain models when input data schema changes.",
    ],
    answer: "B",
    explanation:
      "Databricks Workflows orchestrate end-to-end ML pipelines with task dependencies, scheduling, retries, and notifications — the backbone of automated MLOps.",
  },
  {
    id: 140,
    section: "Databricks Machine Learning",
    question:
      "What is the minimum code to log a scikit-learn model in MLflow and retrieve it later?",
    options: [
      "A. mlflow.save_model(model, 'sklearn'); loaded = mlflow.load_model('sklearn')",
      "B. with mlflow.start_run(): mlflow.sklearn.log_model(model, 'model') — then load with mlflow.sklearn.load_model('runs:/<run_id>/model')",
      "C. mlflow.record_model(model) — then retrieve with mlflow.get_model(run_id)",
      "D. pickle.dump(model, open('model.pkl','wb')) — then mlflow.log_artifact('model.pkl')",
    ],
    answer: "B",
    explanation:
      "mlflow.sklearn.log_model(model, artifact_path) logs the model with its environment. The run URI 'runs:/<run_id>/model' is used to reload it.",
  },
  {
    id: 141,
    section: "Model Development",
    question:
      "A random search with 50 iterations is compared to a grid search over the same 200-combination space. Which statement is correct?",
    options: [
      "A. Grid search always finds a better result because it is exhaustive.",
      "B. Random search with 50 iterations explores 25% of the space but can find good results faster than an exhaustive grid search, especially in high-dimensional spaces.",
      "C. Random search and grid search are identical when max_iter equals the grid size.",
      "D. Grid search is always faster because it is parallelized automatically.",
    ],
    answer: "B",
    explanation:
      "Bergstra & Bengio (2012) showed that random search often finds competitive hyperparameters faster than grid search because not all dimensions are equally important.",
  },
  {
    id: 142,
    section: "Data Processing",
    question:
      "Which Spark function computes a correlation matrix between numeric columns?",
    options: [
      "A. df.corr('col1', 'col2')",
      "B. from pyspark.ml.stat import Correlation; Correlation.corr(df_vector, 'features')",
      "C. df.pearson(cols=['col1', 'col2'])",
      "D. spark.ml.correlation_matrix(df)",
    ],
    answer: "B",
    explanation:
      "SparkML's Correlation.corr() computes Pearson or Spearman correlations on a vector-assembled features column.",
  },
  {
    id: 143,
    section: "Databricks Machine Learning",
    question:
      "What is Databricks Lakehouse Monitoring used for in an ML context?",
    options: [
      "A. It monitors cluster CPU and memory usage.",
      "B. It tracks data quality, feature distributions, and model prediction distributions over time to detect drift.",
      "C. It schedules model retraining jobs automatically.",
      "D. It replaces MLflow for experiment tracking.",
    ],
    answer: "B",
    explanation:
      "Lakehouse Monitoring creates statistical profiles of Delta tables over time, enabling data drift and prediction drift detection for production ML systems.",
  },
  {
    id: 144,
    section: "Model Development",
    question:
      "What is the purpose of VectorAssembler in SparkML?",
    options: [
      "A. To convert a Spark DataFrame to a pandas DataFrame.",
      "B. To combine multiple feature columns into a single dense or sparse vector column required by SparkML estimators.",
      "C. To normalize all numeric feature columns.",
      "D. To one-hot encode categorical columns.",
    ],
    answer: "B",
    explanation:
      "SparkML algorithms expect a single features column of type Vector. VectorAssembler merges multiple numeric/boolean columns into one.",
  },
  {
    id: 145,
    section: "Model Deployment",
    question:
      "What is the recommended way to ensure reproducibility when deploying MLflow models to different environments?",
    options: [
      "A. Manually document all library versions in a README file.",
      "B. Log the model with mlflow.log_model() which automatically captures the conda.yaml or requirements.txt environment specification.",
      "C. Use the same cluster type in all environments.",
      "D. Containerize the model using a custom Docker image only.",
    ],
    answer: "B",
    explanation:
      "MLflow automatically records the Python environment (conda.yaml or pip requirements.txt) alongside every logged model, ensuring the same dependencies are used when loading or serving the model.",
  },
  {
    id: 146,
    section: "Databricks Machine Learning",
    question:
      "Which of the following correctly describes an end-to-end ML lifecycle on Databricks?",
    options: [
      "A. Data → manual feature scripts → local training → CSV export → manual deployment.",
      "B. Delta Lake data → Feature Store → MLflow experiment tracking → Unity Catalog model registry → Model Serving endpoint → Lakehouse Monitoring.",
      "C. S3 data → pandas only → MLflow tracking → manual REST API deployment.",
      "D. Spark SQL → AutoML only → workspace registry → batch inference only.",
    ],
    answer: "B",
    explanation:
      "The full Databricks MLOps lifecycle leverages Delta Lake for governed data, Feature Store for reusable features, MLflow for tracking, Unity Catalog for governed model registry, Model Serving for deployment, and Monitoring for observability.",
  },
  {
    id: 147,
    section: "Data Processing",
    question:
      "What does df.dropDuplicates() do in PySpark?",
    options: [
      "A. Removes rows with any null values.",
      "B. Removes duplicate rows based on all columns (or specified subset), keeping one copy.",
      "C. Drops columns with duplicate names.",
      "D. Removes rows where all feature values are identical to the target.",
    ],
    answer: "B",
    explanation:
      "df.dropDuplicates() deduplicates rows. Pass a list of column names to check duplicates based only on those columns: df.dropDuplicates(['id', 'date']).",
  },
  {
    id: 148,
    section: "Model Development",
    question:
      "What is the primary reason to use cross-validation in the model selection process?",
    options: [
      "A. To speed up training by splitting the data into smaller chunks.",
      "B. To get a more reliable estimate of generalization performance and to select between models/hyperparameters without overfitting to a single validation set.",
      "C. To reduce the training dataset size for faster iteration.",
      "D. To eliminate the need for a test set entirely.",
    ],
    answer: "B",
    explanation:
      "Using a single fixed validation set for model selection can lead to choosing a model that happens to fit that specific split. CV averages over multiple splits for a more robust selection criterion.",
  },
  {
    id: 149,
    section: "Databricks Machine Learning",
    question:
      "Which MLflow component is responsible for storing the model artifact files (weights, pickles, etc.)?",
    options: [
      "A. MLflow Tracking Server (the run metadata store).",
      "B. MLflow Artifact Store (S3, DBFS, Azure Blob, etc.).",
      "C. MLflow Model Registry.",
      "D. MLflow Projects.",
    ],
    answer: "B",
    explanation:
      "The Artifact Store is a configurable blob storage backend (DBFS, S3, GCS, Azure Blob) where model files and other logged artifacts are physically saved.",
  },
  {
    id: 150,
    section: "Data Processing",
    question:
      "A data scientist wants to handle missing values in a SparkML pipeline. Which transformer should they use?",
    options: [
      "A. pyspark.ml.feature.Imputer",
      "B. sklearn.impute.SimpleImputer",
      "C. pyspark.sql.functions.fillna",
      "D. pyspark.ml.feature.MissingValueHandler",
    ],
    answer: "A",
    explanation:
      "pyspark.ml.feature.Imputer is a SparkML transformer (with fit/transform) that can be included in a SparkML Pipeline. It supports mean, median, and mode strategies.",
  },

  // ─── CONCEPT PRACTICE QUESTIONS (151–168) ───────────────────────────────
  {
    id: 151,
    section: "Data Processing",
    question:
      "A data scientist is preparing a model on employee records. The dataset contains job title (categorical, 15% missing), annual salary (right-skewed, 8% missing), and years of experience (normally distributed with outliers, 5% missing). Which imputation approach is most appropriate for each column?",
    options: [
      "A. Mean for salary, mode for job title, and mean for years of experience.",
      "B. Mode for job title, median for salary, and median with outlier clipping for years of experience.",
      "C. Mean for all numerical columns, mode for categorical.",
      "D. Drop all rows containing any missing value.",
    ],
    answer: "B",
    explanation:
      "Mode is appropriate for categorical columns like job title. Median is robust to skew, making it better than mean for salary. Years of experience has outliers, so a median-based or outlier-clipped strategy is preferred over mean, which is pulled by extreme values.",
  },
  {
    id: 152,
    section: "Databricks Machine Learning",
    question:
      "An ML engineer wants to register a logged MLflow model to Unity Catalog at the path prod.marketing.lead_scorer. Compared to registering to the workspace registry, which additional step is required?",
    options: [
      "A. Set the experiment name to match the Unity Catalog path before training.",
      "B. Call mlflow.set_registry_uri('databricks-uc') and provide a model signature before registering.",
      "C. Manually create the catalog and schema in SQL before calling register_model().",
      "D. Export the model to ONNX format for Unity Catalog compatibility.",
    ],
    answer: "B",
    explanation:
      "To target Unity Catalog, you must redirect the registry with mlflow.set_registry_uri('databricks-uc') and supply a model signature. The model name must use the three-level catalog.schema.model format. None of these steps are required for the workspace registry.",
  },
  {
    id: 153,
    section: "Databricks Machine Learning",
    question:
      "A model is logged using fe.log_model() after being trained with a Feature Store training set. What happens automatically when fe.score_batch() is called at inference time?",
    options: [
      "A. The model is retrained using the latest values in the feature table.",
      "B. The stored feature lineage is used to automatically fetch and join the correct features to the input DataFrame.",
      "C. All feature values must still be passed manually to score_batch().",
      "D. The model signature is validated, but no features are retrieved.",
    ],
    answer: "B",
    explanation:
      "When a model is logged via the Feature Engineering Client, the feature metadata is stored with the model. At scoring time, score_batch() reads that lineage and automatically looks up and joins the required feature columns — the caller only needs to provide the entity keys.",
  },
  {
    id: 154,
    section: "Databricks Machine Learning",
    question:
      "An engineer calls fe.score_batch(model_uri, df) on a model that was trained using Feature Store features. What is the minimum content df must contain?",
    options: [
      "A. All feature columns that were used during training.",
      "B. Only the entity primary key(s) used to look up features in the feature table.",
      "C. The target label column from the original training dataset.",
      "D. A timestamp column for point-in-time feature lookups.",
    ],
    answer: "B",
    explanation:
      "Because feature lineage is embedded in the model artifact, score_batch() only needs the entity key (e.g., user_id, product_id) to look up and join all required features automatically.",
  },
  {
    id: 155,
    section: "Databricks Machine Learning",
    question:
      "A data scientist needs to add searchable metadata tags to a registered model version in Unity Catalog. Which privilege is required to perform this action?",
    options: [
      "A. MODIFY",
      "B. EXECUTE",
      "C. APPLY_TAG",
      "D. MANAGE",
    ],
    answer: "C",
    explanation:
      "The APPLY_TAG privilege grants the ability to set, update, or delete tags on Unity Catalog securable objects, including registered model versions. MODIFY and MANAGE are broader privileges not specifically designed for tagging.",
  },
  {
    id: 156,
    section: "Data Processing",
    question:
      "Which Databricks command produces an interactive visual data profile — including column statistics, value distributions, and null counts — directly inside a notebook cell?",
    options: [
      "A. df.printSchema()",
      "B. df.describe().show()",
      "C. dbutils.data.summarize(df)",
      "D. display(df.summary())",
    ],
    answer: "C",
    explanation:
      "dbutils.data.summarize(df) generates the built-in Databricks data profile widget with histograms, statistics, and null percentages for each column. df.describe() and display(df.summary()) return tabular statistics but not the full visual profile.",
  },
  {
    id: 157,
    section: "Model Deployment",
    question:
      "A developer wants to query a Databricks model serving endpoint from an external application. Which of the following is a valid authentication method for sending inference requests?",
    options: [
      "A. SSH key pair configured on the cluster.",
      "B. A Databricks Personal Access Token (PAT) passed in the Authorization header.",
      "C. AWS IAM role assumed directly by the external application.",
      "D. Kerberos ticket from the corporate Active Directory.",
    ],
    answer: "B",
    explanation:
      "Databricks model serving endpoints accept Bearer token authentication via a PAT in the Authorization HTTP header. SSH keys, IAM roles (directly), and Kerberos are not supported authentication methods for the serving REST API.",
  },
  {
    id: 158,
    section: "Data Processing",
    question:
      "A linear regression model predicting home sale prices shows that residuals fan outward as fitted values increase. Which transformation most directly addresses this variance instability?",
    options: [
      "A. Apply z-score standardization to all input features.",
      "B. Apply a log transformation to the target variable.",
      "C. Apply PCA to reduce the number of input features.",
      "D. Apply min-max scaling to all input features.",
    ],
    answer: "B",
    explanation:
      "Fanning residuals indicate heteroscedasticity. A log transformation on the target variable compresses the upper range of values, stabilizing variance across the prediction range. Scaling inputs does not address variance in the target.",
  },
  {
    id: 159,
    section: "Data Processing",
    question:
      "A dataset of sensor readings is roughly bell-shaped but contains occasional extreme spikes. Which outlier detection approach is most robust when the distribution has heavy tails?",
    options: [
      "A. Flag values more than 3 standard deviations from the mean.",
      "B. Use the interquartile range (IQR) and flag values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR.",
      "C. Inspect the min and max from df.describe() and manually set thresholds.",
      "D. Remove the top and bottom 0.1% of values by rank.",
    ],
    answer: "B",
    explanation:
      "The IQR method is resistant to the outliers themselves distorting the threshold — unlike mean/std which are pulled by extreme values. This makes IQR more reliable when heavy tails or spikes are present.",
  },
  {
    id: 160,
    section: "Databricks Machine Learning",
    question:
      "A data scientist opens a specific MLflow run in the Tracking UI. Which of the following information is displayed on the Run page?",
    options: [
      "A. A live CPU and memory utilization graph for the training cluster.",
      "B. Logged parameters, metrics, tags, and model artifacts including the model signature.",
      "C. A side-by-side comparison chart of this run against all other runs in the experiment.",
      "D. The Unity Catalog feature table schemas used during training.",
    ],
    answer: "B",
    explanation:
      "The MLflow Run page shows the run's logged parameters, metrics over steps, custom tags, and the artifact tree (including the model and its signature). Live cluster metrics are in the Databricks cluster UI, and cross-run comparisons are on the Compare Runs page.",
  },
  {
    id: 161,
    section: "Model Development",
    question:
      "A team has a large hyperparameter search space but limited compute budget. They need to find a good configuration without exhaustively evaluating every combination. Which search strategy best fits this constraint?",
    options: [
      "A. Grid search — guarantees finding the optimal combination.",
      "B. Random search — efficiently samples the space with fewer total evaluations.",
      "C. Bayesian optimization — always converges faster than random search.",
      "D. Manual tuning — eliminates wasted evaluations entirely.",
    ],
    answer: "B",
    explanation:
      "Random search samples randomly from the hyperparameter space and empirically tends to find good configurations with far fewer evaluations than grid search. Bayesian optimization can be more efficient but requires more setup and is better suited when evaluations are very expensive.",
  },
  {
    id: 162,
    section: "Model Development",
    question:
      "A neural network trained with mean squared error (MSE) loss shows erratic loss spikes on batches that contain large prediction errors. What is the most direct cause?",
    options: [
      "A. The learning rate scheduler is missing from the training config.",
      "B. MSE squares each error, so large residuals produce disproportionately large gradients that destabilize weight updates.",
      "C. The model architecture does not have enough layers for the dataset size.",
      "D. The batch size is too large for the available GPU memory.",
    ],
    answer: "B",
    explanation:
      "MSE penalizes errors quadratically. When large errors exist, their squared contribution dominates the gradient, causing large unstable weight updates. Switching to a loss like MAE or Huber loss can reduce this sensitivity.",
  },
  {
    id: 163,
    section: "Model Development",
    question:
      "A regression model reports an R-squared (R²) value of 0.84 on the held-out test set. How should this value be interpreted?",
    options: [
      "A. The model's average prediction error is 0.16 units.",
      "B. 84% of the variance in the target variable is explained by the model.",
      "C. The model makes correct predictions 84% of the time.",
      "D. The RMSE of the model is 0.16.",
    ],
    answer: "B",
    explanation:
      "R-squared is the proportion of variance in the target explained by the model (range: −∞ to 1.0; higher is better). It does not directly represent accuracy, error magnitude, or RMSE.",
  },
  {
    id: 164,
    section: "Model Development",
    question:
      "What is the primary reason to pass SparkTrials() instead of Trials() to Hyperopt's fmin() function?",
    options: [
      "A. SparkTrials allows the objective function to be maximized rather than minimized.",
      "B. SparkTrials distributes individual hyperparameter trials across Spark workers for parallel evaluation.",
      "C. SparkTrials automatically selects the optimal search algorithm (tpe vs. random).",
      "D. SparkTrials caches the training dataset in memory to speed up repeated reads.",
    ],
    answer: "B",
    explanation:
      "SparkTrials parallelizes Hyperopt trials by running each trial on a separate Spark task, reducing total wall-clock tuning time. Trials() runs everything sequentially on the driver. The search algorithm is set separately via the algo parameter.",
  },
  {
    id: 165,
    section: "Model Deployment",
    question:
      "A data scientist needs to score 500 million records stored in a Delta table using a model logged in MLflow. Which approach avoids driver memory bottlenecks and scales efficiently?",
    options: [
      "A. Load all records into a pandas DataFrame on the driver, then call model.predict().",
      "B. Wrap the MLflow model as a pandas_udf and apply it to a Spark DataFrame.",
      "C. Call the model's REST endpoint once per record from a loop on the driver.",
      "D. Downsample to 10 million records and run pandas inference.",
    ],
    answer: "B",
    explanation:
      "A pandas_udf (or Spark UDF) distributes inference across all cluster workers and processes data partition-by-partition. This avoids collecting data to the driver and scales linearly with cluster size.",
  },
  {
    id: 166,
    section: "Data Processing",
    question:
      "A categorical feature has 200 unique values and will be used in a gradient boosted tree model. Which encoding strategy is most practical?",
    options: [
      "A. One-hot encode it, producing 200 sparse binary columns.",
      "B. Leave the values as raw strings and let the model handle them natively.",
      "C. Use target encoding, replacing each category with the mean target value for that category.",
      "D. Use binary encoding only — it works for features with exactly 2 values.",
    ],
    answer: "C",
    explanation:
      "For high-cardinality categoricals, one-hot encoding creates a very wide, sparse feature space that hurts training efficiency. Target encoding maps each category to a meaningful numerical signal (mean target), keeping dimensionality low. Care must be taken to avoid target leakage using cross-validation folds.",
  },
  {
    id: 167,
    section: "Model Development",
    question:
      "A fraud detection model achieves 96% precision but only 38% recall. The business requirement is to catch as many fraudulent transactions as possible while keeping false alarms reasonable. Which single metric should the team optimize?",
    options: [
      "A. Precision — to further reduce false positives.",
      "B. Accuracy — since high precision already indicates a good model.",
      "C. F1 Score — to balance catching fraud against generating false alarms.",
      "D. RMSE — to minimize the average distance between predicted and actual labels.",
    ],
    answer: "C",
    explanation:
      "The model's low recall means it misses most fraud. F1 Score is the harmonic mean of precision and recall, so improving it forces the model to improve on both dimensions simultaneously. Optimizing precision alone would ignore the recall problem, and RMSE is a regression metric.",
  },
  {
    id: 168,
    section: "Model Deployment",
    question:
      "A team trains models in a staging workspace and promotes them to a production workspace. Production data has a noticeably different distribution than staging data. Which promotion strategy is most appropriate?",
    options: [
      "A. Promote the serialized model artifact and deploy it directly to production.",
      "B. Promote the training code to production and retrain the model on production data.",
      "C. Keep the staging model in production until a data drift alert fires.",
      "D. Register the staging model in Unity Catalog and share it to the production workspace.",
    ],
    answer: "B",
    explanation:
      "When data distributions differ between environments, a model trained on staging data may underperform in production. Promoting the training code and retraining on production data ensures the model reflects the actual production distribution.",
  },
];
