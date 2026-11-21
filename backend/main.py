from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.get("/experiments")
def experiments() -> list[dict[str, str]]:
    return [
        {"id": "1", "title": "Experiment 1", "status": "running"},
        {"id": "2", "title": "Experiment 2", "status": "completed"},
        {"id": "3", "title": "Experiment 3", "status": "failed"},
    ]