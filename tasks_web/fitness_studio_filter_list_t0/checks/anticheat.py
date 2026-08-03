"""Anti-cheat gate: required components present + the class schedule really renders."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = ["src/App.tsx", "src/components/ClassSchedule.tsx"]
MARKERS = ["class-filters", "class-list", "class-card"]


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    src = (repo / "src/components/ClassSchedule.tsx").read_text()
    for marker in MARKERS:
        if marker not in src:
            return {"passed": False, "message": f"class schedule gutted: {marker} removed"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
