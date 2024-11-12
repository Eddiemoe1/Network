import os
from pathlib import Path

# Define the folder and file structure
list_of_files = [
    "anomaly_detection/src/__init__.py",
    "anomaly_detection/src/components/__init__.py",
    "anomaly_detection/src/components/data_ingestion.py",
    "anomaly_detection/src/components/data_transformation.py",
    "anomaly_detection/src/components/model_trainer.py",
    "anomaly_detection/src/components/model_evaluation.py",
    "anomaly_detection/src/pipeline/__init__.py",
    "anomaly_detection/src/pipeline/training_pipeline.py",
    "anomaly_detection/src/pipeline/prediction_pipeline.py",
    "anomaly_detection/src/utils/__init__.py",
    "anomaly_detection/src/utils/utils.py",
    "anomaly_detection/src/logger/log_example.py",
    "anomaly_detection/src/exception/exception.py",
    "anomaly_detection/tests/unit/__init__.py",
    "anomaly_detection/tests/integration/__init__.py",
    "anomaly_detection/config.yaml",
    "anomaly_detection/requirements.txt",
    "anomaly_detection/requirements_dev.txt",
    "tox.ini",
    "setup.py",
    "setup.cfg",
    "pyproject.toml",
    "init_setup.sh",
    "anomaly_detection/README.md",
    "anomaly_detection/experiment/experiments.ipynb"
]

# Create the directories and files
for filepath in list_of_files:
    filepath = Path(filepath)
    filedir, filename = os.path.split(filepath)
    
    # Create the directory if it doesn't exist
    if filedir:
        os.makedirs(filedir, exist_ok=True)
    
    # Create the file if it doesn't exist
    if not os.path.exists(filepath):
        with open(filepath, "w") as f:
            pass  # Creates an empty file

print("Anomaly detection module structure created successfully!")
