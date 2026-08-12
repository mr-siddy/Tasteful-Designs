"""Anti-cheat gate: required components present + the patient stories slider really renders."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = ["src/App.tsx", "src/components/PatientStories.tsx"]


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    src = (repo / "src/components/PatientStories.tsx").read_text()
    if "story-slide" not in src:
        return {"passed": False, "message": "patient story slides removed"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
